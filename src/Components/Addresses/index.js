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
    const handleDelete = (id) => {
        AddressService.delete(id).then((result) => {
            console.log('result', result)
            if (result.status === 200) {
                toast.success('Deleted Successfully!')
                getAddresses()
            }
        }).catch((err) => {
            if (err.response?.data?.message) {
                toast.error(err.response.data.message);
            }
        })
    }
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
                                {addresses?.map((data) =>
                                    <Grid item key={data._id} className='address_container' sx={{ marginBottom: '10px' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px 17px 0px 17px' }}>
                                            <Box sx={{ marginBottom: '30.5px' }}>
                                                <Typography className='address_name'>{data.name}</Typography>
                                                <Typography className='address_add'>{`${data.address?.address1},${data.city} , ${data.state} - ${data.pinCode}`}</Typography>
                                                <Typography sx={{ fontWeight: '600', fontSize: '13.5px' }}>9896927760</Typography>
                                            </Box>
                                            <Box>
                                                <Checkbox sx={{
                                                    p: 0,
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 38,
                                                        color: theme.primaryColor
                                                        // borderRadius: 20
                                                    }
                                                }} checked={data.isDefault} />
                                            </Box>
                                        </Box>
                                        <Box className='action_section'>
                                            <Grid className='adress_action' onClick={() => navigate(`/address/edit/${data._id}`)}>
                                                <Typography variant='span'> Edit</Typography>
                                            </Grid>
                                            <Grid className='adress_action' onClick={() => handleDelete(data._id)}><Typography variant='span'> Remove</Typography></Grid>
                                        </Box>
                                    </Grid>)}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(AddressComponent)