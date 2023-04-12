import { useContext } from "react";
// import { UserContext } from "../../contexts/UserContext";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  // const { loading } = useContext(UserContext);
  const loading = false;
  if (loading) {
    return <div>loading...</div>;
  }
  return <Outlet />;
};
export default ProtectedRoutes;
