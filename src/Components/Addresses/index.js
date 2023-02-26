import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import {
    Box,
    Grid,
    Typography,
} from "@mui/material";
import { LeftNavbar } from '../leftbar';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import AddressService from '../../Services/Address.service';
import AddressContainer from './addressContainer';
import { LightText } from '../../Utils/Common/styledComponent';

const AddressComponent = () => {
    const navigate = useNavigate();
    const [addresses, setAddresses] = useState([])
    const [defaultAddress, setDefaultAddress] = useState([])

    const getAddresses = async () => {
        const result = await AddressService.getAll()
        if (result.status < 400) {
            const addresses = result.data
            const defaultAdd = addresses.splice(0, 1);
            setDefaultAddress(defaultAdd);
            setAddresses(addresses);
        }
    }
    useEffect(() => {
        getAddresses()
    }, [])
    return (
        <>
            <Box className='details__container'>
                <Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row' }, display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
                    <Grid item md={4} lg={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <LeftNavbar />
                    </Grid>
                    <Grid item md={8} lg={8}>
                        <Box>
                            <Grid sx={{ display: 'flex' }}>
                                <Box sx={{ width: '466px' }}><Typography className='field_label' sx={{ padding: '0px 0px 18px 25px' }}>Default Address</Typography></Box>
                                <Grid item sx={{ marginLeft: '12px' }} className='add_btn' onClick={() => navigate('/address/add')}><Typography variant='span'>Add Address</Typography></Grid>
                            </Grid>
                            <Grid >
                                {defaultAddress?.map((data) => {
                                    return (<AddressContainer key={data._id}
                                        data={data}
                                        handleData={getAddresses}
                                    />)
                                })}
                                <Box sx={{ margin: '16px 25px' }}><LightText>Other Addresses</LightText></Box>
                                {addresses?.map((data) => {
                                    return (<AddressContainer key={data._id}
                                        data={data}
                                        handleData={getAddresses}
                                    />)
                                })}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(AddressComponent)