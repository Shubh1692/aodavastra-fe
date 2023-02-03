import React, { useState } from "react";
import {
    Button, FormControl, TextField, FormHelperText, Box, Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/project_logo_svg.svg";
import { FlexCenterColumn, PrimaryButton, PrimaryText, FlexDivRow, PrimaryColorText } from "../../Utils/Common/component";
import HttpService from "../../Services/Http.service";
import { toast } from "react-toastify";
import { api_base_url } from "../../Utils/Common/urls";

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
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}
                    className="logo_container" sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'end', } }}
                >
                    <Box
                        sx={{ width: { lg: '50%', md: '60%', sm: '30%', xs: '30%' }, padding: { md: '0px', sm: '50px', xs: '10px' } }}
                        component="img"
                        className=""
                        alt="The MODA VASTRA Logo"
                        src={logo}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7} sx={{
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
                                    type="email"
                                    label="E-mail"
                                    name="email"
                                    size="small"
                                    className="mt-12"
                                    fullWidth error={Boolean(error)}
                                    onChange={handleChange}
                                />
                                {error && (
                                    <FormHelperText htmlFor="form-selector" error={!!error}>
                                        {error}
                                    </FormHelperText>
                                )}
                                <Grid item sx={{ mt: 3 }}>
                                    <Button
                                        variant="outlined"
                                        onClick={handleSubmit}
                                        sx={{
                                            width: "50%", margin: 'auto',
                                            color: "#424242", borderColor: "#424242",
                                            display: 'flex', justifyContent: 'center'
                                        }}>
                                        Send Mail
                                    </Button>
                                </Grid>
                            </Box>
                        </FlexCenterColumn>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default RecoverComponent;
