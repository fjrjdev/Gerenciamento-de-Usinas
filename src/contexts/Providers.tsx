import { PartnerProviders } from "./PartnerContext/PartnerContext";
import { PlantsProviders } from "./PlantsContext/PlantsContext";

interface IDefaultProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IDefaultProps) => {
  return (
    <PartnerProviders>
      <PlantsProviders>{children}</PlantsProviders>
    </PartnerProviders>
  );
};
export default Providers;
