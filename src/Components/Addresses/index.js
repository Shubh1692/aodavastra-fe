import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import {
    Box,
    Checkbox,
    Grid,
    Typography,
} from "@mui/material";
import { LeftNavbar } from '../Leftbar';
import './index.scss';
import theme from '../../Assets/Styles/theme';
import { useNavigate } from 'react-router-dom';
import AddressService from '../../Services/Address.service';
import { toast } from 'react-toastify';
import AddressContainer from './addressContainer';

const AddressComponent = () => {
    const navigate = useNavigate();
    const [addresses, setAddresses] = useState([])

    const getAddresses = () => {
        AddressService.getAll().then((result) => {
            if (result.status === 200) {
                setAddresses(result.data)
            }
        }).catch((err) => {
            if (err.response?.data?.message) {
                toast.error(err.response.data.message);
            }
        })
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
                    <Grid item md={4} lg={4} sx={{ display: 'flex', justifyContent: 'end' }}>
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