import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../Layout";
import bag from "../../Assets/Images/Empty_bag.svg";
import bagMobile from "../../Assets/Images/Empty_bag_mobile.jpeg";
import './index.scss';
import { ShoppingHeading } from "../../Utils/Common/styledComponent";
import { useNavigate } from "react-router-dom";
const EmptyBag = () => {
  const navigate = useNavigate();

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
        <ShoppingHeading>Shopping Bag</ShoppingHeading>
        <Grid item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: '60px'
          }}
        >
          <Box component={'img'} src={bag} alt="emptybag" />
        </Grid>
        <Grid item className="shopping_cart_msg">
          <Typography component={'span'}>Your Shopping Bag is Empty Right Now.</Typography>
        </Grid>
        <Button variant="contained" className="shop_now" onClick={() => navigate('/dashboard')}>Shop Now</Button>
      </Grid>
    </>
  );
};

export default Layout(EmptyBag);
