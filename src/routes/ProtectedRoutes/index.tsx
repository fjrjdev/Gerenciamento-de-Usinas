import { useLocation, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { IDecodedToken } from "../../contexts/PartnerContext/PartnerContext";

export function RequireAuth({ children }: { children: JSX.Element }) {
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
  const partner = getLocalStorage()
  let location = useLocation();

  if (!partner) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}