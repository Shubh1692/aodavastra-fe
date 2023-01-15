import React from 'react';
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

const AddressComponent = () => {
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
                <Grid container columnSpacing={2} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' }, display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
                    <Grid item md={4} lg={4} sx={{ display: 'flex', justifyContent: 'end', pr: 4 }}>
                        <LeftNavbar />
                    </Grid>
                    <Grid item md={8} lg={8}>
                        <Box>
                            <Grid sx={{ display: 'flex'}}>
                                <Box sx={{ width: '466px' }}><Typography className='field_label' sx={{ padding: '0px 0px 18px 36px' }}>Default Address</Typography></Box>
                                <Grid item sx={{marginLeft:'12px'}} className='add_btn' onClick={() => navigate('/address/add')}><Typography variant='span'>Add Address</Typography></Grid>
                            </Grid>
                            <Grid>
                                <Grid item className='address_container'>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px 17px 0px 17px' }}>
                                        <Box sx={{ marginBottom: '30.5px' }}>
                                            <Typography className='address_name'>Sukrut Patil</Typography>
                                            <Typography className='address_add'>J2 303, Nyati Equatorial, Bavdhan , Pune - 411023</Typography>
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
                                            }} />
                                        </Box>
                                    </Box>
                                    <Box className='action_section'>
                                        <Grid className='adress_action' onClick={() => navigate('/address/edit/6767676')}><Typography variant='span'> Edit</Typography></Grid>
                                        <Grid className='adress_action'><Typography variant='span'> Remove</Typography></Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(AddressComponent)