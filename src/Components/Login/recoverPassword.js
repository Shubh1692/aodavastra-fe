import React, { useState } from "react";
import {
    Button, TextField, FormHelperText, Box, Container, Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/project_logo_svg.svg";
import { FlexCenterColumn } from "../../Utils/Common/styledComponent";
import { toast } from "react-toastify";
import AuthService from "../../Services/Auth.service";
import '../index.scss';

const RecoverComponent = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setError('')
        setEmail(e.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email === '') {
            setError('Email required field.')
        } else {
            try {
                const result = await AuthService.forgotPassword({ email });
                console.log(result, result.status)
                if (result && result.status === 201) {
                    toast['success']('Mail sent successfully!')
                }
            } catch (err) {
                if (!!err.response && err.response.data && err.response.data.error) {
                    const errArray = err.response && err.response.data && err.response.data.message
                    if (typeof (errArray) == 'string') {
                        toast['error'](errArray)
                    } else {
                        for (let error of errArray) { toast['error'](error) }
                    }

                }
            }
        }
    };

    return (
        <>
            <Grid container
                sx={{ mt: 0, paddingLeft: 0, height: { lg: '100vh', md: '100vh' }, flexDirection: { lg: 'row', md: 'row', sm: 'column' } }}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
                    className="logo_container" sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'end', } }}
                >
                    <Box
                        sx={{ paddingRight: { lg: '50px' }, width: '320px', height: '127px', padding: { md: '0px', sm: '50px', xs: '10px' } }}
                        component="img"
                        className=""
                        alt="The MODA VASTRA Logo"
                        src={logo}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{
                    display: 'flex', alignItems: 'center'
                }}>
                    <Container component="main">
                        <Box component="form" noValidate className="recover-form">
                            <Typography className='forget_heading'>Forgot Your Password</Typography>
                            <Typography className="sub-heading">Enter the email you use to login to ModaVastra Admin Panel and we will send you a link to get you back into your account.</Typography>
                            <TextField
                                type="email" placeholder="E-mail"
                                name="email" inputProps={{
                                    sx: {
                                        height: 16,
                                        "&::placeholder": {
                                            opacity: 0.8,
                                            fontSize: "18px",
                                        },
                                    },
                                }} className="mt-12"
                                fullWidth error={Boolean(error)}
                                onChange={handleChange}
                            />

                            {error && (
                                <FormHelperText htmlFor="form-selector" error={!!error}>
                                    {error}
                                </FormHelperText>
                            )}
                            <FlexCenterColumn>
                                <Button variant="contained" className="login_button" sx={{ marginTop: '58px !important', width: '50%', margin: 'auto' }} onClick={handleSubmit}>log in</Button>
                            </FlexCenterColumn>
                            <FlexCenterColumn>
                                <Typography onClick={() => navigate('/login')} className="back-to-login">Back to Login</Typography>
                            </FlexCenterColumn>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default RecoverComponent;
