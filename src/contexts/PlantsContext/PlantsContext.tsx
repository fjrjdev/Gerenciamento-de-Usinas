import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../services";
import { PartnerContext } from "../PartnerContext/PartnerContext";

export interface IPlant {
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
  cmodal: boolean;
  setCModal: React.Dispatch<React.SetStateAction<boolean>>;
  emodal: boolean;
  setEModal: React.Dispatch<React.SetStateAction<boolean>>;
  listPlant: IPlant[];
  registerPlant(data: IPlant): void;
  patchPlant(data: IPlant): void;
  deletePlant(): void;
}
export const PlantsContext = createContext({} as IPlantsContext);

export const PlantsProviders = ({ children }: IPlantsProviders) => {
  const { setGlobalLoading, getLocalStorage } = useContext(PartnerContext);
  const [plant, setPlant] = useState<IPlant>({});
  const [listPlant, setListPlant] = useState<IPlant[]>([]);
  const [cmodal, setCModal] = useState(false);
  const [emodal, setEModal] = useState(false);
  const partnerToken = getLocalStorage();
  useEffect(() => {
    getListPlant();
  }, []);

  const getListPlant = () => {
    setGlobalLoading(true);
    api
      .get("plants/")
      .then((response) => {
        const filteredArray = response.data.filter(
          (elem: any) => elem.partner_id === partnerToken.partner_id
        );
        setListPlant(filteredArray);
        setPlant(filteredArray[0]);
      })
      .finally(() => setGlobalLoading(false));
  };
  const registerPlant = (data: IPlant) => {
    setGlobalLoading(true);
    api
      .post("plants/", data, {
        headers: { Authorization: `Bearer ${partnerToken.access}` },
      })
      .then((res) => {
        if (res.status === 201) {
          getListPlant();
          setCModal(false);
        } else if (res.status === 401) {
          console.log(res.data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setGlobalLoading(false));
  };
  const patchPlant = (data: IPlant) => {
    setGlobalLoading(true);
    api
      .patch(`plants/${plant.id}/`, data, {
        headers: { Authorization: `Bearer ${partnerToken.access}` },
      })
      .then((res) => {
        if (res.status === 200) {
          setEModal(false);
          getListPlant();
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setGlobalLoading(false));
  };
  const deletePlant = () => {
    setGlobalLoading(true);
    api
      .delete(`plants/${plant.id}/`, {
        headers: { Authorization: `Bearer ${partnerToken.access}` },
      })
      .then((res) => {
        if (res.status === 204) {
          setEModal(false);
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
        cmodal,
        setCModal,
        emodal,
        setEModal,
        listPlant,
        registerPlant,
        patchPlant,
        deletePlant,
      }}
    >
      {children}
    </PlantsContext.Provider>
  );
};
