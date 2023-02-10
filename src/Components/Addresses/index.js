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

const AddressComponent = () => {
    const navigate = useNavigate();
    const [addresses, setAddresses] = useState([])

    const getAddresses = async () => {
        const result = await AddressService.getAll()
        if (result.status < 400) {
            setAddresses(result.data)
        }
    }
    useEffect(() => {
        getAddresses()
    }, [])
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
                <Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row' }, display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
                    <Grid item md={4} lg={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <LeftNavbar />
                    </Grid>
                    <Grid item md={8} lg={8}>
                        <Box>
                            <Grid sx={{ display: 'flex' }}>
                                <Box sx={{ width: '466px' }}><Typography className='field_label' sx={{ padding: '0px 0px 18px 36px' }}>Default Address</Typography></Box>
                                <Grid item sx={{ marginLeft: '12px' }} className='add_btn' onClick={() => navigate('/address/add')}><Typography variant='span'>Add Address</Typography></Grid>
                            </Grid>
                            <Grid>
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