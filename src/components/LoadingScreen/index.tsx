import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { PartnerContext } from "../../contexts/PartnerContext/PartnerContext";

const LoadingScreen = () => {
  const { globalLoading } = React.useContext(PartnerContext);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={globalLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default LoadingScreen;
