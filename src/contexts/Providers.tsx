import { PartnerProviders } from "./PartnerContext/PartnerContext";

interface IDefaultProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IDefaultProps) => {
  return <PartnerProviders>{children}</PartnerProviders>;
};
export default Providers;
