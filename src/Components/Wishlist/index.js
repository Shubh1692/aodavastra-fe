import React from 'react';
import Layout from '../Layout';
import { Box, Typography, Grid } from "@mui/material";
import bangle from '../../Assets/Images/bangales_img.png'
import { LeftNavbar } from '../leftbar';
import { useNavigate } from 'react-router-dom';
import theme from '../../Assets/Styles/theme';
import '../index.scss'

const Wishlist = () => {
    const navigate = useNavigate()
    return (
        <>
            <Box className='details__container'>
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
                        <Box className='description_container' sx={{ width: { xs: '328px', md: '465px' } }}>
                            <Box sx={{ width: '124px', height: { xs: '167px' } }}>
                                <Box component={'img'} src={bangle} alt='product_logo' />
                            </Box>
                            <Box className='description_container_details'>
                                <Box sx={{ marginLeft: '12.4px' }}>
                                    <Typography className='wishlist_product_name'>American Diamond Bangles</Typography>
                                    <Typography className='wishlist_product_seller'>by Seller’s Name</Typography>
                                    <Typography className='wishlist_product_prize'>₹ 999.00</Typography>
                                </Box>
                                <Box className='wishlist_actions'>
                                    <Box className='remove_wish wishlist_edit'><Typography variant='span'>Remove</Typography></Box>
                                    <Box className='remove_wish wishlist_remove' onClick={() => navigate('/shopping-bag')} >
                                        <Typography variant='span'>Add to Bag</Typography>
                                    </Box>
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