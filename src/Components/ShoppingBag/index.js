import React from "react";
import Layout from "../Layout";
import {
    Box,
    Typography,
    Stack,
    Grid,
    useTheme,
    Button

} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LeftNavbar } from '../Leftbar';

const ShoppingBag = () => {
    const navigate=useNavigate()
    const theme=useTheme()

    return (
  <Box 
  sx={{
    marginTop: "8pc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}}
  >
    <Grid container columnSpacing={2} >
                    <Grid item md={4} lg={4} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, justifyContent: { xs: 'flex-start', md: 'flex-end' }, pr: { xs: 0, md: 4 } }}>
                        <LeftNavbar />
                    </Grid>
                    <Grid item xs={12} md={8} lg={8} sx={{
                        borderLeft: 1,
                        borderColor: "#000",
                        height: '300px',

                    }}>
                        <Typography
                            sx={{ fontSize: '24px', color: '#3C3C3C',mb:2 }}>Showing 1 item(s) in wishlist</Typography>
                       
                    </Grid>
                </Grid>
  </Box>
    )
}
export default Layout(ShoppingBag);