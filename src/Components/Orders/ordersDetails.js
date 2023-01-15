import React from 'react';
import Layout from '../Layout';
import {
    Box,
    Grid, Typography
} from "@mui/material";
import { LeftNavbar } from '../Leftbar';
import theme from '../../Assets/Styles/theme';
import { Ordered } from '../../Utils/Common/orderStatus';
import { BoldText, Heading, LightText, OrderConatiner, PurpleText, SemiLightText } from '../../Utils/Common/component';
import cash_on_delivery from '../../Assets/Images/cash_on_delivery.svg'
import post1 from '../../Assets/Images/post-1.png'
import './index.scss';

const OrdersDetails = () => {
    return (
        <Box
            sx={{
                marginTop: '8pc',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Grid container columnSpacing={2} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' }, display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
                <Grid item sm={4} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'end', pr: 4 }}>
                    <LeftNavbar />
                </Grid>
                <Grid item sm={4} md={8} lg={8}>
                    <Box sx={{ width: '640px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: '400', fontSize: '24px', padding: '0px 0px 18px 36px', color: theme.lightBlack }}>Order Details</Typography>
                        <Ordered />
                    </Box>
                    <Box sx={{ width: '640px' }}>
                        <OrderConatiner>
                            <Box sx={{ width: '100%', marginTop: '6px', display: 'flex' }}>
                                <Grid item lg={4} md={4}><BoldText>Order Date</BoldText></Grid>
                                <Grid item lg={8} md={4}><LightText>18 February 2022</LightText></Grid>
                            </Box>
                            <Box sx={{ width: '100%', marginTop: '6px', display: 'flex' }}>
                                <Grid item lg={4} md={4}><BoldText>Total items:</BoldText></Grid>
                                <Grid item lg={8} md={4}><LightText>1 item(s)</LightText></Grid>
                            </Box>
                            <Box sx={{ width: '100%', marginTop: '6px', display: 'flex' }}>
                                <Grid item lg={4} md={4}><BoldText>Order total:</BoldText></Grid>
                                <Grid item lg={8} md={4}><LightText>₹ 999</LightText></Grid>
                            </Box>
                        </OrderConatiner>
                        <Grid sx={{ margin: '16px 0px 6px 0px' }}>
                            <Heading>Shipment Details</Heading>
                        </Grid>
                        <OrderConatiner>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '24px', color: theme.lightBlack, marginBottom: '6px' }} variant='span'>Delivered</Typography>
                                <PurpleText>Delivered on March 10, 2022</PurpleText>
                                <Box sx={{ marginTop: '16px', display: 'flex' }} >
                                    <Box sx={{ width: '160px' }}><img width={'100%'} src={post1} alt='product_image' /></Box>
                                    <Box sx={{ marginLeft: '16px' }}>
                                        <Typography sx={{ fontWeight: 600, fontSize: '24px', color: theme.lightBlack, marginBottom: '6px' }} variant='span'>Silk Saree</Typography>
                                        <Box sx={{ marginTop: '8px' }}><SemiLightText>Seller’s Name</SemiLightText></Box>
                                        <Box sx={{ marginTop: '8px' }}><LightText>Size: Small</LightText></Box>
                                        <Box sx={{ marginTop: '8px' }}><LightText>₹ 3,099.00</LightText></Box>
                                    </Box>
                                </Box>
                            </Box>
                        </OrderConatiner>
                        <Grid sx={{ margin: '16px 0px 6px 0px' }}>
                            <Heading>Payment Information</Heading>
                        </Grid>
                        <OrderConatiner>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={cash_on_delivery} alt='cash_on_delivery' />
                                <Typography sx={{ marginLeft: '12.4px', fontSize: '14px', fontWeight: 600, color: theme.lightBlack }}>Cash on Delivery</Typography>
                            </Box>
                        </OrderConatiner>
                        <Grid sx={{ margin: '16px 0px 6px 0px' }}>
                            <Heading>Shipping Address</Heading>
                        </Grid>
                        <OrderConatiner>
                            <Box sx={{ width: '50%', flexWrap: 'wrap' }}>
                                <LightText> Name Surname Block 1, DivyaSree Omega, Survey No. 13, Kondapur Village,
                                    Hyderabad,Andhra Pradesh 500001
                                </LightText>
                            </Box>
                        </OrderConatiner>

                        <Grid sx={{ margin: '16px 0px 6px 0px' }}>
                            <Heading>Order Summary</Heading>
                        </Grid>
                        <OrderConatiner>
                            <Box sx={{ width: '100%', marginTop: '6px', display: 'flex' }}>
                                <Grid item lg={4} md={4}><BoldText>Items: </BoldText></Grid>
                                <Grid item lg={8} md={8}><LightText>₹ 999.00</LightText></Grid>
                            </Box>
                            <Box sx={{ width: '100%', marginTop: '6px', display: 'flex' }}>
                                <Grid item lg={4} md={4}><BoldText>Handling & Shipping:</BoldText></Grid>
                                <Grid item lg={8} md={8}><LightText>₹ 0.00</LightText></Grid>
                            </Box>
                            <Box sx={{ width: '100%', marginTop: '6px', display: 'flex' }}>
                                <Grid item lg={4} md={4}><BoldText>Total Before Tax:</BoldText></Grid>
                                <Grid item lg={8} md={8}><LightText>₹ 999.00</LightText></Grid>
                            </Box>
                            <Box sx={{ width: '100%', marginTop: '6px', display: 'flex' }}>
                                <Grid item lg={4} md={4}><BoldText>Tax:</BoldText></Grid>
                                <Grid item lg={8} md={8}><LightText>₹ 40.00</LightText></Grid>
                            </Box>
                            <Box sx={{ width: '100%', marginTop: '6px', display: 'flex' }}>
                                <Grid item lg={4} md={4}><BoldText>Order Total:</BoldText></Grid>
                                <Grid item lg={8} md={8}><PurpleText>₹ 1039.00</PurpleText></Grid>
                            </Box>
                        </OrderConatiner>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Layout(OrdersDetails);
