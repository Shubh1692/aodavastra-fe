import React from 'react';
import Layout from '../Layout';
import {
    Box,
    Typography,
    Stack,
    Grid,
    useTheme

} from "@mui/material";
import { LeftNavbar } from '../Leftbar';
const Wishlist = () => {
    return (
        <>
            <Box
                sx={{
                    marginTop: "8pc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Grid container columnSpacing={2} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' }, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                    <Grid item md={4} lg={4} sx={{ display: 'flex', justifyContent: 'end', pr: 4 }}>
                        <LeftNavbar />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(Wishlist)