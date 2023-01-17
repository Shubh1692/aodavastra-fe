import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../Layout";
import bag from "../../Assets/Images/Asset 17@2x 1.svg";
const EmptyBag = () => {
  return (
    <>
      <Grid
        container
        md={6}
        lg={6}
        sm={6}
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   mt: "20vh",
        }}
      >
        <Grid
          item
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              width: "260px",
              height: "51px",
              position: "absolute",
              top: "104px",
              left: "599px",
              color: "#7A628F",
              fontFamily: "poppins",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "34px",
              lineHeight: "51px",
            }}
          >
            Shopping Bag
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          lg={6}
          sm={6}
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              //   background: "url(Asset 17@2x.png)",
              position: "absolute",
              width: "348px",
              height: "318px",
              left: "533px",
              top: "216px",
              //   backgroundImage: { bag },
            }}
          >
            <img src={bag}></img>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          lg={6}
          sm={6}
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              width: "466px",
              height: "36px",
              position: "absolute",
              top: "594px",
              left: "487px",
              color: "#3C3C3C",
              fontFamily: "poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "36px",
            }}
          >
            Your Shopping Bag is Empty Right Now.
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          lg={6}
          sm={6}
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#A585C1",
              position: "absolute",
              width: "400px",
              height: "48px",
              left: "507px",
              top: "686px",
              color: "white",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "36px",
              textAlign: "center",
            }}
          >
            Shop Now
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout(EmptyBag);
