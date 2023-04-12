import { createContext, ReactNode, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { api } from "../../services";

interface IPartner {
  id: string;
  name: string;
  cnpj: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}
interface IPartnerLogin {
  email: string;
  password: string;
}
interface IPartnerContext {
  partnerData: IPartner | undefined;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loginPartner(data: IPartnerLogin): void;
}

interface IPartnerProviderProps {
  children: ReactNode;
}
interface IAcessToken {
  access: string;
  refresh: string;
}
interface IDecodedToken {
  user_id: string;
}
export const PartnerContext = createContext({} as IPartnerContext);

export const PartnerProviders = ({ children }: IPartnerProviderProps) => {
  const [partnerData, setPartnerData] = useState<IPartner>();
  const [globalLoading, setGlobalLoading] = useState(false);

  const loginPartner = (data: IPartnerLogin) => {
    console.log(data);
    api
      .post("login/", data)
      .then((res) => {
        setLocalStorage(res.data);
      })
      .catch((error) => console.log(error));
  };
  const setLocalStorage = (data: IAcessToken) => {
    localStorage.setItem("@ACCESS", data.access);
    localStorage.setItem("@REFRESH", data.refresh);
  };
  const getLocalStorage = (): any => {
    const access = localStorage.getItem("@ACCESS") || "";
    const refresh = localStorage.getItem("@REFRESH");

    const partner_id: IDecodedToken = jwt_decode(access);
    const token = {
      access,
      refresh,
      partner_id,
    };
    if (token?.access) {
      return token;
    }
    return null;
  };

  return (
    <PartnerContext.Provider
      value={{
        partnerData,
        globalLoading,
        setGlobalLoading,
        loginPartner,
      }}
    >
      {children}
    </PartnerContext.Provider>
  );
};
