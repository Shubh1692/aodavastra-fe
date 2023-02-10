import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import {
    Box,
    Checkbox,
    Grid,
    Typography,
    FormControl, OutlinedInput, FormControlLabel, FormHelperText, Button
} from "@mui/material";
import { LeftNavbar } from '../leftbar';
import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AddressService from '../../Services/Address.service';
import { toast } from 'react-toastify';

const userDetails = [
    { heading: 'Name', type: 'text', placeholder: 'Name', name: 'name' },
    { heading: 'Mobile', type: 'number', placeholder: 'Mobile number', name: 'phoneNo' }
]

const pinState = [
    { heading: 'Pin', type: 'text', placeholder: 'Pin code', name: 'pinCode' },
    { heading: 'State', type: 'text', placeholder: 'State', name: 'state' }
]

const addressDetails = [
    { heading: 'Address line 1', placeholder: 'Address line 1', name: 'address1' },
    { heading: 'Address line 2', placeholder: 'Address line 2', name: 'address2' },
    { heading: 'City / District', placeholder: 'City', name: 'city' }
]


const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    phoneNo: yup.string().required('Mobile Number  is required'),
    pinCode: yup.string().required('Pin is required'),
    state: yup.string().required('State is required'),
    address1: yup.string().required('Address  line1 is required'),
    address2: yup.string().required('Address line2 is required'),
    city: yup.string().required('City is required'),
    isDefault: yup.string()
});

const AddressAction = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [isEdit, setEdit] = useState()

    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNo: '',
            pinCode: '',
            city: '',
            state: '',
            isDefault: false,
            address1: '',
            address2: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values, 'yyyyyyyyyyyyyyyeeessssssssss')
            const payload = {
                name: values.name,
                phoneNo: values.phoneNo.toString(),
                pinCode: values.pinCode,
                city: values.city,
                state: values.state,
                isDefault: values.isDefault,
                address: {
                    address1: values.address1,
                    address2: values.address2
                }
            }
            const result = await AddressService.add(payload)
            if (result.status < 400) {
                toast.success('Address added successFully');
                navigate('/address')
            }

        }
    });

    const editAddress = () => {
        AddressService.getById(id).then((result) => formik.setValues(result?.data))
    }

    useEffect(() => {
        if (id) {
            setEdit(true)
            editAddress()
        }
    }, [])
    console.log('------------------------------===========>', formik, formik.values?.address)
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
                    <Grid item sm={4} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <LeftNavbar />
                    </Grid>
                    <Grid item sm={8} md={8} lg={6}>
                        <Box component={'form'} noValidate onSubmit={formik.handleSubmit}>
                            <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography className='field_label' sx={{ padding: '0px 0px 18px 36px' }}>{isEdit ? 'Edit' : 'Add'} Address</Typography>
                            </Grid>
                            <Box>
                                {userDetails?.map((field, index) => <Box key={index} sx={{ width: '466px', marginBottom: '16px' }}>
                                    <Typography className='field_label'>{field.heading}</Typography>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-password" name={field.name}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            value={formik.values[field.name]}
                                            onChange={formik.handleChange}
                                            inputProps={{
                                                sx: {
                                                    height: 21,
                                                    "&::placeholder": {
                                                        opacity: 0.8,
                                                        fontSize: "18.7px",
                                                    },
                                                },
                                            }}
                                            error={Object.keys(formik.errors).includes(field.name) && Object.keys(formik.touched).includes(field.name)}
                                        />
                                    </FormControl>
                                    {Object.keys(formik.errors).includes(field.name) && Object.keys(formik.touched)?.includes(field.name) &&
                                        <FormHelperText error={Object.keys(formik.errors).includes(field.name) && Object.keys(formik.touched).includes(field.name)}>
                                            {Object.keys(formik.errors).includes(field.name) && Object.keys(formik.touched).includes(field.name) && formik.errors[field.name]}
                                        </FormHelperText>}
                                </Box>)}
                            </Box>
                            <Box sx={{ width: '466px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                                {pinState?.map((field, index) => <Box key={index} sx={{ width: '45%' }}>
                                    <Typography className='field_label'>{field.heading}</Typography>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-password" fullWidth name={field.name}
                                            type={field.type} placeholder={field.placeholder}
                                            value={formik.values[field.name]} onChange={formik.handleChange}
                                            inputProps={{
                                                sx: {
                                                    height: 21,
                                                    "&::placeholder": {
                                                        opacity: 0.8,
                                                        fontSize: "18.7px",
                                                    },
                                                },
                                            }}
                                            error={Object.keys(formik.errors).includes(field.name) && Object.keys(formik.touched).includes(field.name)}
                                        />
                                    </FormControl>
                                    {Object.keys(formik.errors).includes(field.name) && Object.keys(formik.touched)?.includes(field.name) &&
                                        <FormHelperText error={Object.keys(formik.errors).includes(field.name) && Object.keys(formik.touched).includes(field.name)}>
                                            {Object.keys(formik.errors).includes(field.name) && Object.keys(formik.touched).includes(field.name) && formik.errors[field.name]}
                                        </FormHelperText>}
                                </Box>)}
                            </Box>
                            <Box>
                                {addressDetails?.map((field, index) => {
                                    console.log('====>', field.name, formik.values[field.name], formik.values?.address?.[field.name])
                                    return <Box key={index} sx={{ width: '466px', marginBottom: '16px' }}>
                                        <Typography className='field_label'>{field.heading}</Typography>
                                        <FormControl sx={{ width: '100%' }} variant="outlined">
                                            <OutlinedInput
                                                id="outlined-adornment-password" fullWidth name={field.name}
                                                type={field.type} placeholder={field.placeholder}
                                                onChange={formik.handleChange}
                                                value={['address1', 'address2'].includes(field.name) ? formik.values?.address?.[field.name] : formik.values[field.name]}
                                                inputProps={{
                                                    sx: {
                                                        height: 21,
                                                        "&::placeholder": {
                                                            opacity: 0.8,
                                                            fontSize: "18.7px",
                                                        },
                                                    },
                                                }}
                                                error={Object.keys(formik.errors).includes(field.name) && Object.keys(formik.touched).includes(field.name)}
                                            />
                                        </FormControl>
                                        {Object.keys(formik.errors).includes(field.name) && Object.keys(formik.touched)?.includes(field.name) &&
                                            <FormHelperText error={Object.keys(formik.errors).includes(field.name) && Object.keys(formik.touched).includes(field.name)}>
                                                {Object.keys(formik.errors).includes(field.name) && Object.keys(formik.touched).includes(field.name) && formik.errors[field.name]}
                                            </FormHelperText>}
                                    </Box>
                                })}
                                <Box className='make_default'>
                                    <FormControlLabel name='isDefault'
                                        onChange={formik.handleChange} control={<Checkbox
                                            disabled={formik.values.isDefault}
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 22,
                                                    color: '#3c3c3c'
                                                }
                                            }}
                                        />} label={<Typography className='add_checkbox' >Make this my default address.</Typography>} />
                                </Box>
                                <Button variant="contained" type="submit" className="save_changes_add">Save Changes</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(AddressAction)