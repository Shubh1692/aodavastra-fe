import React from 'react';
import Layout from '../Layout';
import {
    Box,
    Typography,
    Stack,
    Grid,
    Button

} from "@mui/material";
import bangle from '../../Assets/Images/bangales_img.png'
import { LeftNavbar } from '../Leftbar';
import { useNavigate } from 'react-router-dom';
import theme from '../../Assets/Styles/theme';
import '../index.scss'

const Wishlist = () => {
    const navigate = useNavigate()
    return (
        <>
            <Box
                sx={{
                    marginTop: '8pc',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Grid container>
                    <Grid item md={4} lg={4} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                        <LeftNavbar />
                    </Grid>
                    <Grid item xs={12} md={8} lg={8} sx={{
                        borderColor: "#000",
                        height: '300px',
                    }}>
                        <Typography
                            sx={{ fontSize: '24px', color: theme.lightBlack, mb: 2 }}>Showing 1 item(s) in wishlist:</Typography>
                        <Box className='description_container'
                            sx={{
                                padding: '0px 9.3px',
                                background: theme.lightBackground, width: { xs: '328px', md: '465px' },
                                height: '186px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}
                        >
                            <Box sx={{ width: '124px', height: { xs: '167px' } }}>
                                <img src={bangle} alt='product_logo' />
                            </Box>
                            <Box className='description_container_details'>
                                <Box sx={{ marginLeft: '12.4px' }}>
                                    <Typography sx={{ fontSize: '18.6px', marginBottom: '6px', color: theme.lightBlack, fontWeight: 600 }}>American Diamond Bangles</Typography>
                                    <Typography sx={{ fontSize: '13.9px', marginBottom: '6px', color: theme.lightBlack }}>by Seller’s Name</Typography>
                                    <Typography sx={{ fontSize: '13.9px', color: theme.lightBlack }}>₹ 999.00</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', position: 'relative', top: 50, marginLeft: '12.4px' }}>
                                    <Box className='remove_wish'
                                        sx={{
                                            border: `0.775px solid ${theme.lightBlack}`,
                                            color: theme.lightBlack,
                                            borderRadius: '2.32px 0px 0px 2.32px'
                                        }}><Typography variant='span'>Remove</Typography></Box>
                                    <Box
                                        sx={{
                                            border: `0.775px solid ${theme.primaryColor}`,
                                            background: theme.primaryColor,
                                            color: theme.white,
                                            borderRadius: ' 0px 2.32px 2.32px 0px'
                                        }} className='remove_wish' onClick={() => navigate('/shopping-bag')} ><Typography variant='span'>Add to Bag</Typography></Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(Wishlist)