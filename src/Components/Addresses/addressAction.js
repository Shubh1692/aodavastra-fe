import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import {
    Box,
    Checkbox,
    Grid,
    Typography,
    FormControl, OutlinedInput, FormHelperText, FormControlLabel
} from "@mui/material";
import { LeftNavbar } from '../Leftbar';
import './index.scss';
import { useParams } from 'react-router-dom';
import theme from '../../Assets/Styles/theme';

const userDetails = [
    { heading: 'Name', type: 'text', placeholder: 'Anjali Verma', name: 'name' },
    { heading: 'Mobile', type: 'number', placeholder: 'Mobile number', name: 'phone' }
]

const pinState = [
    { heading: 'Pin', type: 'text', placeholder: 'Pin code', name: 'pinCode' },
    { heading: 'State', type: 'text', placeholder: 'State', name: 'state' }
]

const addressDetails = [
    { heading: 'Address line 1', placeholder: 'House No, Building No, Street, Area, etc.', name: 'add1' },
    { heading: 'Address line 2', placeholder: 'Town, Locality, Landmark, etc.', name: 'add2' },
    { heading: 'City / District', placeholder: 'City', name: 'city' }
]

const AddressAction = () => {
    const { id } = useParams()
    const [isEdit, setEdit] = useState()
    const handleChange = () => {

    }
    useEffect(() => {
        if (id) { setEdit(true) }
    })
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
                <Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row' }, display: { xs: 'none', sm: 'flex' } }}>
                    <Grid item sm={4} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <LeftNavbar />
                    </Grid>
                    <Grid item sm={8} md={8} lg={6}>
                        <Box>
                            <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography className='field_label' sx={{ padding: '0px 0px 18px 36px' }}>{isEdit ? 'Edit' : 'Add'} Address</Typography>
                            </Grid>
                            <Box>
                                {userDetails?.map((field, index) => <Box key={index} sx={{ width: '466px', marginBottom: '16px' }}>
                                    <Typography className='field_label'>{field.heading}</Typography>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            size="medium" fullWidth name={field.name}
                                            type={field.type} placeholder={field.placeholder} onChange={handleChange}
                                            inputProps={{
                                                sx: {
                                                    "&::placeholder": {
                                                        opacity: 0.8,
                                                        fontSize: "18.7px",
                                                    },
                                                },
                                            }}
                                        />
                                    </FormControl>
                                </Box>)}
                            </Box>
                            <Box sx={{ width: '466px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                                {pinState?.map((field, index) => <Box key={index} sx={{ width: '45%' }}>
                                    <Typography className='field_label'>{field.heading}</Typography>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            size="medium" fullWidth name={field.name}
                                            type={field.type} placeholder={field.placeholder} onChange={handleChange}
                                            inputProps={{
                                                sx: {
                                                    "&::placeholder": {
                                                        opacity: 0.8,
                                                        fontSize: "18.7px",
                                                    },
                                                },
                                            }}
                                        />
                                    </FormControl>
                                </Box>)}
                            </Box>
                            <Box>
                                {addressDetails?.map((field, index) => <Box key={index} sx={{ width: '466px', marginBottom: '16px' }}>
                                    <Typography className='field_label'>{field.heading}</Typography>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            size="medium" fullWidth name={field.name}
                                            type={field.type} placeholder={field.placeholder} onChange={handleChange}
                                            inputProps={{
                                                sx: {
                                                    "&::placeholder": {
                                                        opacity: 0.8,
                                                        fontSize: "18.7px",
                                                    },
                                                },
                                            }}
                                        />
                                    </FormControl>
                                </Box>)}
                                <Box className='make_default'>
                                    <FormControlLabel control={<Checkbox sx={{
                                        // p: 0,
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 22,
                                            color: '#3c3c3c'
                                            // borderRadius: 20
                                        }
                                    }} />} label={<Typography className='add_checkbox' >Make this my default address.</Typography>} />
                                </Box>
                                <Box>
                                    <Grid className="save_changes_add">Save Changes</Grid>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(AddressAction)