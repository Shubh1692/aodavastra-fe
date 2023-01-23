import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../Layout";
import bag from "../../Assets/Images/Empty_bag.svg";
import bagMobile from "../../Assets/Images/Empty_bag_mobile.jpeg";
import './index.scss';
const EmptyBag = () => {
  return (
    <>
      <Grid container md={12} lg={12} sx={{
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column',
        marginTop: '6pc',
      }}
      >
        <Typography className="shopping_text">Shopping Bag</Typography>
        <Grid item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component={'img'} src={bag} alt="emptybag" />
        </Grid>
        <Grid item className="shopping_cart_msg">
          <Typography component={'span'}>Your Shopping Bag is Empty Right Now.</Typography>
        </Grid>
        <Button variant="contained" className="shop_now">Shop Now</Button>
      </Grid>
    </>
  );
};

export default Layout(EmptyBag);
