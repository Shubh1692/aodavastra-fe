import React, { useState } from 'react'
import { BoldText, FlexCenterColumn, Heading, HeadingWhite, LightText, PurpleText, ShoppingHeading } from '../../Utils/Common/styledComponent';
import { Box, Grid, TextField, Typography, Button } from '@mui/material';
import Layout from '../Layout';
import { CheckBox } from '@mui/icons-material';
import theme from '../../Assets/Styles/theme';
import post1 from '../../Assets/Images/post-1.png';
import './index.scss';
import PaymentAccordian from '../Accordion/paymentMethod';
import { BagProductDetails } from '../../Utils/Common/component';
import AddressContainer from '../Addresses/addressContainer';
import { OrderPlaced } from '../Dialog/orderPlaced';
import { Link } from 'react-router-dom';

const demoAddess = {
    _id: '1234567890',
    name: 'Sukrut Patil',
    address: {
        address1: 'add11111111',
        address2: 'add22222',
    },
    city: 'cityyyyy',
    state: 'stateeeee',
    isDefault: false,
    pinCode: '45678',
    phoneNo: '9898989898'
}

const Checkout = () => {
    const [ordered, setOrdered] = useState(false)
    return (
        <>
            <Box sx={{ margin: '8pc auto 0px', width: '1084px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', marginBottom: '21px', justifyContent: 'center' }}><ShoppingHeading>Shopping Bag</ShoppingHeading></Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ width: '466px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <Heading>Delivery Address</Heading>
                            <Link to='/address/add' className='address_link'>Add New Address</Link>
                        </Box>
                        <Box sx={{ marginBottom: '12px' }}>
                            <AddressContainer data={demoAddess} />
                            <AddressContainer data={demoAddess} />
                        </Box>
                        <Heading>Apply Coupons</Heading>
                        <Box sx={{ margin: '12px 0px 9px 0px', display: 'flex' }}>
                            <Box className='coupons_code'>
                                <TextField sx={{ width: '100%' }} placeholder='Enter Coupon Code' />
                            </Box>
                            <Box className='apply_coupon'><Typography>Apply Coupon</Typography></Box>
                        </Box>
                        <Box sx={{ padding: '15px' }}>
                            <LightText>Popular offers</LightText>
                            <Box sx={{ width: '450px', height: '183.6px', margin: '4px 0px', display: '-webkit-box', overflowX: 'scroll' }}>
                                <Box className='coupon_section'>
                                    <Box component={'img'} src={post1} />
                                    <Typography variant='span'>10% off on MODAVASTRA</Typography>
                                    <Box className='apply_button '>
                                        <Typography className='applied'>Applied</Typography>
                                    </Box>
                                </Box>
                                <Box className='coupon_section'>
                                    <Box component={'img'} src={post1} />
                                    <Typography variant='span'>10% off on MODAVASTRA</Typography>
                                    <Box className='apply_button '>
                                        <Typography className='not_applied'>Apply</Typography>
                                    </Box>
                                </Box>
                                <Box className='coupon_section'>
                                    <Box component={'img'} src={post1} />
                                    <Typography variant='span'>10% off on MODAVASTRA</Typography>
                                    <Box className='apply_button '>
                                        <Typography className='applied'>Applied</Typography>
                                    </Box>
                                </Box>
                                <Box className='coupon_section'>
                                    <Box component={'img'} src={post1} />
                                    <Typography variant='span'>10% off on MODAVASTRA</Typography>
                                    <Box className='apply_button '>
                                        <Typography className='applied'>Applied</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <LightText>Big Discounts on selected brands</LightText>
                            <Box sx={{ width: '450px', height: '183.6px', display: '-webkit-box' }}>
                                <Box className='coupon_section'>
                                    <Box component={'img'} src={post1} />
                                    <Typography variant='span'>50% off</Typography>
                                    <Box className='apply_button '>
                                        <Typography className='applied'>Applied</Typography>
                                    </Box>
                                </Box>
                                <Box className='coupon_section'>
                                    <Box component={'img'} src={post1} />
                                    <Typography variant='span'>50% off</Typography>
                                    <Box className='apply_button '>
                                        <Typography className='applied'>Applied</Typography>
                                    </Box>
                                </Box>
                                <Box className='coupon_section'>
                                    <Box component={'img'} src={post1} />
                                    <Typography variant='span'>50% off</Typography>
                                    <Box className='apply_button '>
                                        <Typography className='applied'>Applied</Typography>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                        <Box>
                            <Heading>Choose Payment Method</Heading>
                            <PaymentAccordian />
                            <Box sx={{ margin: '8.5px 0px' }}>
                                <LightText>Estimated Delivery by <b>25th February, 2022</b></LightText>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "488px" }}>
                        <LightText>1 item(s) in bag:</LightText>
                        <Box sx={{ height: '660px', overflowY: 'scroll', margin: '18px 0px 12.8px' }}>
                            <BagProductDetails />
                            <BagProductDetails />
                            <BagProductDetails />
                            <BagProductDetails />
                        </Box>
                        <Box sx={{ margin: '24.78px 0px 12px' }}>
                            <Heading>Order Summary</Heading>
                        </Box>
                        <Box className='order_bag_details'>
                            <Box sx={{ padding: '13.7px 12px' }}>
                                <Box sx={{ width: '100%', marginBottom: '10px', display: 'flex' }}>
                                    <Grid item lg={6} md={6} sx={{ width: '50%' }}><BoldText>Items: </BoldText></Grid>
                                    <Grid item lg={6} md={6} sx={{ width: '50%' }}><LightText>₹ 999.00</LightText></Grid>
                                </Box>
                                <Box sx={{ width: '100%', marginBottom: '10px', display: 'flex' }}>
                                    <Grid item lg={6} md={6} sx={{ width: '50%' }}><BoldText>Discount:</BoldText></Grid>
                                    <Grid item lg={6} md={6} sx={{ width: '50%' }}><LightText>₹ 20.00</LightText></Grid>
                                </Box>
                                <Box sx={{ width: '100%', marginBottom: '10px', display: 'flex' }}>
                                    <Grid item lg={6} md={6} sx={{ width: '50%' }}><BoldText>Handling & Shipping:</BoldText></Grid>
                                    <Grid item lg={6} md={6} sx={{ width: '50%' }}><LightText>₹ 0.00</LightText></Grid>
                                </Box>
                                <Box sx={{ width: '100%', marginBottom: '10px', display: 'flex' }}>
                                    <Grid item lg={6} md={6} sx={{ width: '50%' }}><BoldText>Total Before Tax:</BoldText></Grid>
                                    <Grid item lg={6} md={6} sx={{ width: '50%' }}><LightText>₹ 979.00</LightText></Grid>
                                </Box>
                                <Box sx={{ width: '100%', marginBottom: '10px', display: 'flex' }}>
                                    <Grid item lg={6} md={6} sx={{ width: '50%' }}><BoldText>Tax:</BoldText></Grid>
                                    <Grid item lg={6} md={6} sx={{ width: '50%' }}><LightText>₹ 40.00</LightText></Grid>
                                </Box>
                                <Box sx={{ width: '100%', marginBottom: '10px', display: 'flex' }}>
                                    <Grid item lg={6} md={6} sx={{ width: '50%' }}><BoldText>Order Total:</BoldText></Grid>
                                    <Grid item lg={6} md={6} sx={{ width: '50%' }}><PurpleText>₹ 1019.00</PurpleText></Grid>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: '100%', display: 'flex', justifyContent: 'center'
                        }}><Button variant='contained' onClick={() => setOrdered(true)} className='bag_proceed'><HeadingWhite>Proceed to Checkout</HeadingWhite></Button></Box>
                    </Box>
                </Box>
            </Box>
            <OrderPlaced open={ordered} handleClose={() => setOrdered(false)} />
        </>
    )
}
export default Layout(Checkout);