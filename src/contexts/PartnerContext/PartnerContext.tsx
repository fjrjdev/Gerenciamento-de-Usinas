import { createContext, ReactNode, useState } from "react";
import jwt_decode from "jwt-decode";
import { api } from "../../services";
import router from "../../routes";
interface IPartner {
  id: string;
  name: string;
  cnpj: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
}
interface IPartnerLogin {
  email: string;
  password: string;
}
interface IPartnerProviderProps {
  children: ReactNode;
}
interface IAcessToken {
  access: string;
  refresh: string;
  partner_id?: string;
}
export interface IDecodedToken {
  user_id: string;
}
interface IPartnerContext {
  partnerData: IPartner | undefined;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loginPartner(data: IPartnerLogin): void;
  registerPartner(data: IPartner): void;
  getLocalStorage(): IAcessToken;
  logout(): void;
}
export const PartnerContext = createContext({} as IPartnerContext);

export const PartnerProviders = ({ children }: IPartnerProviderProps) => {
  const [partnerData, setPartnerData] = useState<IPartner>();
  const [globalLoading, setGlobalLoading] = useState(false);

  const loginPartner = async (data: IPartnerLogin) => {
    setGlobalLoading(true);
    const hasToken = getLocalStorage();
    if (hasToken) {
      refreshPartner(hasToken);
    } else {
      api
        .post("login/", data)
        .then((res) => {
          if (res.status === 200) {
            setLocalStorage(res.data);
            setPartnerData(getLocalStorage());
            router.navigate("/dashboard");
            window.location.reload();
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setGlobalLoading(false));
    }
  };
  const refreshPartner = (hasToken: any) => {
    setGlobalLoading(true);
    const data = { refresh: hasToken.refresh };
    api
      .post("refresh/", data)
      .then((res) => {
        if (res.status === 200) {
          setLocalStorage(res.data, true);
          setPartnerData(getLocalStorage());
          router.navigate("/dashboard");
        } else if (res.status === 401) {
          window.location.reload();
          router.navigate("/");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setGlobalLoading(false));
  };
  const registerPartner = (data: IPartner) => {
    setGlobalLoading(true);
    api
      .post("partners/", data)
      .then((res) => {
        if (res.status === 201) {
          router.navigate("/");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setGlobalLoading(false));
  };
  const setLocalStorage = (data: IAcessToken, refresh = false) => {
    if (refresh) {
      localStorage.setItem("@ACCESS", data.access);
    } else {
      localStorage.setItem("@ACCESS", data.access);
      localStorage.setItem("@REFRESH", data.refresh);
    }
  };
  const getLocalStorage = (): any => {
    const access = localStorage.getItem("@ACCESS") || "First Access";
    if (access === "First Access") {
      return false;
    }
    const refresh = localStorage.getItem("@REFRESH");
    const { user_id }: IDecodedToken = jwt_decode(access);
    const token = {
      access,
      refresh,
      partner_id: user_id,
    };
    return token;
  };
  const logout = () => {
    localStorage.clear();
    router.navigate("/");
    window.location.reload();
  };
  return (
    <PartnerContext.Provider
      value={{
        partnerData,
        globalLoading,
        setGlobalLoading,
        loginPartner,
        registerPartner,
        getLocalStorage,
        logout,
      }}
    >
      {children}
    </PartnerContext.Provider>
  );
};
