import React, { useState } from "react";
import {
    Button, FormControl, TextField, FormHelperText, Box, Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/project_logo_svg.svg";
import { FlexCenterColumn } from "../../Utils/Common/component";
import HttpService from "../../Services/Http.service";
import { toast } from "react-toastify";
import { api_base_url } from "../../Utils/Common/urls";
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
            setError('Email required field')
        } else {
            try {
                const result = await HttpService.post(api_base_url + '/user/forgotten-password', { email });
                console.log(result, result.status)
                if (result && result.status == '201') {
                    toast['success']('Mail sent successfully!')
                }

            } catch (err) {
                if (!!err.response && err.response.data && err.response.data.error) {
                    const errArray = err.response && err.response.data && err.response.data.message
                    if (typeof (errArray) == 'string') {
                        toast['error'](errArray)
                    } else {
                        for (let error of errArray) {
                            toast['error'](error)
                        }
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
                    <Container component="main" maxWidth="xs">
                        <FlexCenterColumn>
                            <Box
                                component="form"
                                noValidate
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    type="email" placeholder="E-mail"
                                    name="email" inputProps={{
                                        sx: {
                                            height:18,
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
                                    <Grid item className="login_button" sx={{ mt: 5, width: '50%', margin: 'auto' }} onClick={handleSubmit}>Send mail</Grid>
                                </FlexCenterColumn>
                            </Box>
                        </FlexCenterColumn>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default RecoverComponent;
