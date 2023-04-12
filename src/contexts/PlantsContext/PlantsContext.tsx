import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import jwt_decode from "jwt-decode";
import { api } from "../../services";
import router from "../../routes";
import { PartnerContext } from "../PartnerContext/PartnerContext";

interface IPlant {
  id: string;
  name: string;
  cnpj: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
  partner_id?: string;
}
interface IPlantsProviders {
  children: ReactNode;
}
interface IAcessToken {
  access: string;
  refresh: string;
}

interface IPlantsContext {
  plant: IPlant | undefined;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  listPlant: IPlant[];
  registerPlant(data: IPlant): void;
}
export const PlantsContext = createContext({} as IPlantsContext);

export const PlantsProviders = ({ children }: IPlantsProviders) => {
  const { setGlobalLoading, getLocalStorage } = useContext(PartnerContext);
  const [plant, setPlant] = useState<IPlant>();
  const [listPlant, setListPlant] = useState<IPlant[]>([]);
  const [modal, setModal] = useState(false);
  const partnerToken = getLocalStorage();
  useEffect(() => {
    getListPlant();
  }, []);

  const getListPlant = () => {
    setGlobalLoading(true);
    api
      .get("plants/")
      .then((response) => setListPlant(response.data))
      .finally(() => setGlobalLoading(false));
  };
  const registerPlant = (data: IPlant) => {
    setGlobalLoading(true);
    api.defaults.headers.authorization = `Bearer ${partnerToken.access}`;
    api
      .post("plants/", data)
      .then((res) => {
        if (res.status === 201) {
          getListPlant()
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setGlobalLoading(false));
  };

  return (
    <PlantsContext.Provider
      value={{
        plant,
        modal,
        setModal,
        listPlant,
        registerPlant,
      }}
    >
      {children}
    </PlantsContext.Provider>
  );
};
