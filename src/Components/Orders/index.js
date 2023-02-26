import React from 'react';
import Layout from '../Layout';
import {
    Box,
    Checkbox,
    FormControlLabel,
    Grid,
    Typography,
} from "@mui/material";
import { LeftNavbar } from '../leftbar';
import theme from '../../Assets/Styles/theme';
import { Delivered } from '../../Utils/Common/orderStatus';
import { useNavigate } from 'react-router-dom';
import { BoldHeading, BoldText, LightText } from '../../Utils/Common/styledComponent';
import './index.scss';

const Orders = () => {
    const navigate = useNavigate()
    return (
        <>
            <Box className='details__container'>
                <Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row' }, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                    <Grid item md={4} lg={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <LeftNavbar />
                    </Grid>
                    <Grid>
                        <Box className='order_container'>
                            <Box className='profile_order_section'>
                                <Box className='date_time'>
                                    <Typography className='date_time_text'>02 March 2020</Typography>
                                    <Typography className='date_time_text'>07 : 30 PM</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ padding: '11px' }}>
                                <Typography className='order_text_gray' sx={{ fontWeight: 400 }}>#133589</Typography>
                                <Box sx={{
                                    margin: '4px 0px',
                                    borderBottom: `1.3px solid ${theme.lightBlack}`,
                                    display: 'flex', justifyContent: "space-between"
                                }}>
                                    <Typography className='order_text_black' sx={{ fontWeight: 400 }}>₹ 3,099.00</Typography>
                                    <Typography className='order_text_black' sx={{ fontWeight: 500 }}>2 Items</Typography>
                                </Box>
                                <Typography className='order_text_black' sx={{ fontWeight: 600 }}>Address</Typography>
                                <Box sx={{
                                    background: theme.white, padding: '13.6px 10.8px'
                                }}>
                                    <Typography sx={{ fontSize: '13.6px', fontWeight: 600, color: theme.lightBlack }}>Sukrut Patil | 9896927760</Typography>
                                    <Typography className='order_add'>J2 303, Nyati Equatorial, Bavdhan, Pune - 411023</Typography>
                                </Box>
                                <Box sx={{ marginTop: '10.8px', display: 'flex', justifyContent: 'space-between' }}>
                                    <Delivered />
                                    <Typography variant='span' className='view_details' onClick={() => navigate('/orders/gdwr2395893285')}>View Details</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid sx={{ width: '150px', marginLeft: '20px' }}>
                        <BoldHeading>Apply Filters</BoldHeading>
                        <Grid sx={{ marginTop: '8px', width: '112px', border: `1px solid ${theme.lightBlack}` }}></Grid>
                        <Grid sx={{ margin: '12px 0px' }}><BoldText>Order Status</BoldText></Grid>
                        <Box className='product_status'>
                            {['All', 'Ordered', 'Delivered', 'Cancelled']?.map((filter) => <FormControlLabel key={filter}
                                control={<Checkbox sx={{ padding: '3px 8px 0px 0px' }} />} label={<Box sx={{ padding: '3px 12px 0px 0px' }}>
                                    <LightText>{filter}</LightText>
                                </Box>} />)}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(Orders)