import { styled } from "@mui/material/styles";
import Header from "./header";
import React, { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const LayoutContainer = styled("div")(() => ({
  width: `100%`,
  height: "100%",
  margin: "0px",
  padding: "0px",
}));

export const Layout = (WrappedComponent) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(false);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 2 }}
          open={isLoading}
        >
          <CircularProgress />
        </Backdrop>
        <LayoutContainer>
          <Header />
          <WrappedComponent {...props} setLoading={setLoadingState} />
        </LayoutContainer>
      </>
    );
  }

  return HOC;
};

export default Layout;
