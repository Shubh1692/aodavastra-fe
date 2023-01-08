import React, { useState } from "react";
import {
  Button, FormControl, TextField, InputLabel, Box, Container,
  OutlinedInput, InputAdornment, IconButton, Checkbox, FormHelperText
} from "@mui/material";
import Grid from "@mui/material/Grid";
import logo from "../../Assets/Images/project_logo_svg.svg";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { AvForm, AvField } from 'availity-reactstrap-validation';
import { FlexCenterColumn, PrimaryButton, PrimaryText, FlexDivRow, PrimaryColorText } from "../../Utils/Common/component";
import HttpService from "../../Services/Http.service";
import "./index.scss";
import { toast } from "react-toastify";

const url = 'https://79d0-2406-b400-53-7c76-6584-557e-2574-2dbb.in.ngrok.io';

const SignUpComponent = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm_password: false
  });

  const [userPayload, setPayload] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    tc: false
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  })

  const handleClickShowPassword = (key) => setShowPassword({ ...showPassword, [key]: !showPassword[key] });

  const handleChange = (e) => {
    setErrors({ ...errors, [e.target.name]: '' })
    setPayload({ ...userPayload, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userPayload?.email === '' || userPayload?.password === '' || userPayload?.name === '' || userPayload?.confirm_password === '') {
      if (userPayload?.email === '' && userPayload?.password === '' && userPayload?.confirm_password === '' && userPayload?.name === '') {
        setErrors({
          email: 'Email is required field',
          password: 'Password is required field',
          name: 'Name is required field',
          confirm_password: 'Confirm password is required field'
        })
      }
      else {
        if (userPayload?.email === '') {
          setErrors({ email: 'Email required field' })
        }
        else if (userPayload?.name === '') {
          setErrors({ name: 'Name required field' })
        }
        else if (userPayload?.password === '') {
          setErrors({ password: 'Password required field' })
        }
        else if (userPayload?.confirm_password === '') {
          setErrors({ confirm_password: 'Confirm password required field' })
        }
      }
    }
    else {
      if (userPayload?.password !== userPayload?.confirm_password) {
        setErrors({ confirm_password: 'Confirm password not matched' })

      }
      else {
        try {
          const result = await HttpService.post(url + '/user/signup', userPayload);
          if (result.data && result.data.token) {
            localStorage.setItem('access_token', result.data.token);
            toast['success']('User created successfully!')
            setTimeout(() => {
              navigate('/')
            }, 2000)
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
    }
  };

  const handleRedirect = () => {
    navigate('/login')
  }

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
              <Box>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  size="small"
                  error={Boolean(errors?.name)}
                  helperText={errors?.name}
                  onChange={handleChange}
                />
                <TextField
                  type="email"
                  label="E-mail"
                  name="email"
                  size="small"
                  className="mt-12"
                  fullWidth
                  error={Boolean(errors?.email)}
                  helperText={errors?.email}
                  onChange={handleChange}
                />
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <InputLabel sx={{ padding: '5px 3px' }} htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    size="small" fullWidth
                    className="mt-12" name='password'
                    type={showPassword.password ? 'text' : 'password'}
                    label="Password" onChange={handleChange}
                    error={Boolean(errors?.password)}
                    helperText={errors?.password}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => handleClickShowPassword('password')}
                          onMouseDown={(e) => e.preventDefault()}
                          edge="end"
                        >
                          {showPassword.password ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {errors && (
                  <FormHelperText htmlFor="form-selector" error={!!errors.password}>
                    {errors.password}
                  </FormHelperText>
                )}
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <InputLabel sx={{ padding: '5px 3px' }} htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    size="small" fullWidth name='confirm_password'
                    className="mt-12" onChange={handleChange}
                    error={Boolean(errors?.confirm_password)}
                    helperText={errors?.confirm_password}
                    type={showPassword.confirm_password ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => handleClickShowPassword('confirm_password')}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword.confirm_password ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                {errors && (
                  <FormHelperText htmlFor="form-selector" error={!!errors.confirm_password}>
                    {errors.confirm_password}
                  </FormHelperText>
                )}
                <FlexDivRow>
                  <Checkbox sx={{ pl: 0 }} name='tc' onChange={(e) => setPayload({ ...userPayload, tc: e.target.checked })} />
                  <PrimaryText>I accept &nbsp;<PrimaryColorText><b>Terms & Conditions </b> &nbsp;</PrimaryColorText> and <PrimaryColorText>&nbsp; Privacy Policy </PrimaryColorText></PrimaryText>
                </FlexDivRow>
                <FlexCenterColumn>
                  <PrimaryButton sx={{ mt: 2, width: '50%', margin: 'auto' }} onClick={handleSubmit}>Sign up</PrimaryButton>
                </FlexCenterColumn>
                <Grid sx={{ mt: 2 }} >
                  <PrimaryText className="or_signup_text" item xs={4}>or signup with </PrimaryText>
                </Grid>
                <Grid sx={{ mt: 2 }}>
                  <Grid item xs={12} sx={{ ml: 9, mb: 2 }}>
                    <GoogleButton
                      label="Continue with Google"
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        fontWeight: "900",
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid component='div' item sx={{
                  fontWeight: 'bold', fontSize: '14px',
                  display: 'flex', justifyContent: 'center',
                }}>
                  <Grid item component='span' >Already Have an Account?</Grid>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={handleRedirect}
                    sx={{
                      width: "50%", margin: 'auto',
                      color: "#424242", borderColor: "#424242",
                      display: 'flex', justifyContent: 'center'
                    }}>
                    Log in
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

export default SignUpComponent;
