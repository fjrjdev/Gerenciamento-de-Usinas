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
  id?: string;
  name?: string;
  cep?: string;
  email?: string;
  latitude?: string;
  longitude?: string;
  maximum_capacity_GW?: string;
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
  setPlant: React.Dispatch<React.SetStateAction<IPlant>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  listPlant: IPlant[];
  registerPlant(data: IPlant): void;
  patchPlant(data: IPlant): void;
}
export const PlantsContext = createContext({} as IPlantsContext);

export const PlantsProviders = ({ children }: IPlantsProviders) => {
  const { setGlobalLoading, getLocalStorage } = useContext(PartnerContext);
  const [plant, setPlant] = useState<IPlant>({});
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
      .then((response) => {
        const filteredArray = response.data.filter((elem:any) => elem.partner_id === partnerToken.partner_id);
        setListPlant(filteredArray);
        setPlant(filteredArray[0]);
      })
      .finally(() => setGlobalLoading(false));
  };
  const registerPlant = (data: IPlant) => {
    setGlobalLoading(true);
    api.defaults.headers.authorization = `Bearer ${partnerToken.access}`;
    api
      .post("plants/", data)
      .then((res) => {
        if (res.status === 201) {
          getListPlant();
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setGlobalLoading(false));
  };
  const patchPlant = (data: IPlant) => {
    setModal(false)
    setGlobalLoading(true);
    api.defaults.headers.authorization = `Bearer ${partnerToken.access}`;
    api
      .patch(`plants/${plant.id}/`, data)
      .then((res) => {
        if (res.status === 200) {
          getListPlant();
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setGlobalLoading(false));
  };

  return (
    <PlantsContext.Provider
      value={{
        plant,
        setPlant,
        modal,
        setModal,
        listPlant,
        registerPlant,
        patchPlant,
      }}
    >
      {children}
    </PlantsContext.Provider>
  );
};
