import React, { useState } from "react";
import Layout from '../Layout';
import {
    Typography, Grid,
    OutlinedInput, Box, FormHelperText, Button
} from "@mui/material";
import '../index.scss'
import { LeftNavbar } from '../leftbar';
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import AuthService from "../../Services/Auth.service";

const UpdatePassword = () => {
    const [loading, setLoading] = useState(false);
    const validationSchema = yup.object({
        oldPassword: yup.string().required("Password  is required."),
        newPassword: yup.string().required("New Password  is required."),
        confirmPassword: yup.string().label('Confirm password').required().oneOf([yup.ref('newPassword'), null], 'Passwords must match.'),
    });

    const formik = useFormik({
        initialValues: { oldPassword: "", newPassword: "", confirmPassword: "" },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setLoading(true);
            const payload = {
                oldPassword: values.oldPassword,
                newPassword: values.newPassword,
                confirmPassword: values.confirmPassword
            };
            const result = await AuthService.changePassword(payload);
            if (result.status < 400) {
                toast.success('Password updated successfully!');
                setLoading(false);
            }
        },
    });

    return (
        <>
            <Box className='details__container'>
                <Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row' }, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                    <Grid item md={4} lg={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <LeftNavbar />
                    </Grid>
                    <Grid sx={{ width: '466px' }}>
                        <Box component={"form"} noValidate onSubmit={formik?.handleSubmit}>
                            <Typography sx={{ fontWeight: '400', fontSize: '24px', padding: '0px 0px 18px 36px' }}>Current Password</Typography>
                            <Box>
                                <Typography className="field_label">Change Password</Typography>
                                <OutlinedInput
                                    id="outlined-adornment-password" fullWidth name='oldPassword'
                                    type='password' placeholder="Enter Old Password" onChange={formik?.handleChange}
                                    error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
                                    inputProps={{
                                        sx: {
                                            height: 21,
                                            "&::placeholder": {
                                                opacity: 0.8,
                                                fontSize: "18.7px",
                                            },
                                        },
                                    }}
                                />
                                {formik.errors?.oldPassword && (
                                    <FormHelperText error={Boolean(formik.errors?.oldPassword)}>
                                        {formik.errors?.oldPassword}
                                    </FormHelperText>
                                )}
                            </Box>
                            <Box sx={{ marginTop: '18.6px' }}>
                                <Typography className="field_label">New Password</Typography>
                                <OutlinedInput
                                    id="outlined-adornment-password" fullWidth name='newPassword'
                                    type='password' placeholder="Enter New Password" onChange={formik?.handleChange}
                                    error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                                    inputProps={{
                                        sx: {
                                            height: 21,
                                            "&::placeholder": {
                                                opacity: 0.8,
                                                fontSize: "18px",

                                            },
                                        },
                                    }}
                                />
                                {formik.errors?.newPassword && (
                                    <FormHelperText error={Boolean(formik.errors?.newPassword)}>
                                        {formik.errors?.newPassword}
                                    </FormHelperText>
                                )}
                            </Box>
                            <Box sx={{ marginTop: '18.6px' }}>
                                <Typography className="field_label">Confirm Password</Typography>
                                <OutlinedInput
                                    id="outlined-adornment-password" fullWidth name='confirmPassword'
                                    type='password' placeholder="Confirm New Password" onChange={formik?.handleChange}
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    inputProps={{
                                        sx: {
                                            height: 21,
                                            "&::placeholder": {
                                                opacity: 0.8,
                                                fontSize: "18px",

                                            },
                                        },
                                    }}
                                />
                                {formik.errors?.confirmPassword && (
                                    <FormHelperText error={Boolean(formik.errors?.confirmPassword)}>
                                        {formik.errors?.confirmPassword}
                                    </FormHelperText>
                                )}
                            </Box>
                            <Button type="submit" disabled={loading} variant="contained" className="save_password">Save Changes</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(UpdatePassword)