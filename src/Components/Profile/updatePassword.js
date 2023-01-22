import React, { useState } from "react";
import Layout from '../Layout';
import {
    Typography, Grid,
    FormControl, OutlinedInput, Box, FormHelperText
} from "@mui/material";
import { LeftNavbar } from '../Leftbar';
import '../index.scss'

const UpdatePassword = () => {
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    const handleChange = () => {

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
                <Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row' }, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                    <Grid item md={4} lg={4} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <LeftNavbar />
                    </Grid>
                    <Grid sx={{ width: '466px' }}>
                        <Box>
                            <Typography sx={{ fontWeight: '400', fontSize: '24px', padding: '0px 0px 18px 36px' }}>Current Password</Typography>
                        </Box>
                        <Box>
                            <Typography className="field_label">Change Password</Typography>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password" fullWidth name='password'
                                    type='password' placeholder="Enter Old Password" onChange={handleChange}
                                    error={Boolean(errors?.password)}
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
                            </FormControl>
                            {errors && (
                                <FormHelperText htmlFor="form-selector" error={!!errors.password}>
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </Box>
                        <Box sx={{ marginTop: '18.6px' }}>
                            <Typography className="field_label">New Password</Typography>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password" fullWidth name='password'
                                    type='password' placeholder="Enter New Password" onChange={handleChange}
                                    error={Boolean(errors?.password)}
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
                            </FormControl>
                            {errors && (
                                <FormHelperText htmlFor="form-selector" error={!!errors.password}>
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </Box>
                        <Box sx={{ marginTop: '18.6px' }}>
                            <Typography className="field_label">Confirm Password</Typography>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password" fullWidth name='password'
                                    type='password' placeholder="Confirm New Password" onChange={handleChange}
                                    error={Boolean(errors?.password)}
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
                            </FormControl>
                            {errors && (
                                <FormHelperText htmlFor="form-selector" error={!!errors.password}>
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </Box>
                        <Grid className="save_password">Save Changes</Grid>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(UpdatePassword)