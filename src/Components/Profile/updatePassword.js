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
                    margin: '8pc',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Grid container columnSpacing={2} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' }, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                    <Grid item md={4} lg={4} sx={{ display: 'flex', justifyContent: 'end', pr: 4 }}>
                        <LeftNavbar />
                    </Grid>
                    <Grid sx={{ width: '466px' }}>
                        <Box>
                            <Typography sx={{ fontWeight: '400', fontSize: '24px', padding: '0px 0px 18px 36px' }}>Current Password</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: '400', fontSize: '24px', marginBottom: '6px' }}>Change Password</Typography>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    size="small" fullWidth name='password'
                                    type='password' placeholder="Enter Old Password" onChange={handleChange}
                                    error={Boolean(errors?.password)}
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
                            {errors && (
                                <FormHelperText htmlFor="form-selector" error={!!errors.password}>
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </Box>
                        <Box sx={{ marginTop: '18.6px' }}>
                            <Typography sx={{ fontWeight: '400', fontSize: '24px', marginBottom: '6px' }}>New Password</Typography>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    size="small" fullWidth name='password'
                                    type='password' placeholder="Enter New Password" onChange={handleChange}
                                    error={Boolean(errors?.password)}
                                    inputProps={{
                                        sx: {
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
                            <Typography sx={{ fontWeight: '400', fontSize: '24px', marginBottom: '6px' }}>Confirm Password</Typography>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    size="small" fullWidth name='password'
                                    type='password' placeholder="Confirm New Password" onChange={handleChange}
                                    error={Boolean(errors?.password)}
                                    inputProps={{
                                        sx: {
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