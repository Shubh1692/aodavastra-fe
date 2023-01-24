import React, { useState } from "react";
import {
  Button, FormControl, OutlinedInput, InputLabel, Box, Container,
  InputAdornment, IconButton, Checkbox, FormHelperText
} from "@mui/material";
import Grid from "@mui/material/Grid";
import logo from "../../Assets/Images/project_logo_svg.svg";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { AvForm, AvField } from 'availity-reactstrap-validation';
import { FlexCenterColumn, PrimaryButton, PrimaryText, FlexDivRow, PrimaryColorText } from "../../Utils/Common/styledComponent";
import HttpService from "../../Services/Http.service";
import { api_base_url } from "../../Utils/Common/urls";
import { toast } from "react-toastify";
import "../index.scss";
import { EmailVerification } from "../Dialog/emailVerification";


const SignUpComponent = () => {
  const navigate = useNavigate();
  const [modelOpen, setModelOpen] = useState(false)
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
          const result = await HttpService.post(api_base_url + '/user/signup', userPayload);
          if (result.data && result.data.token) {
            localStorage.setItem('access_token', result.data.token);
            toast['success']('User created successfully!')
            setTimeout(() => {
              setModelOpen(true)
              // navigate('/')
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
          <Container component="main" maxWidth="xs" sx={{ ml: 0 }}>
            <FlexCenterColumn>
              <Box sx={{ width: '467px' }}>
                <OutlinedInput
                  fullWidth placeholder="Full Name"
                  name="name"
                  inputProps={{
                    sx: {
                      height: 18,
                      "&::placeholder": {
                        opacity: 0.8,
                        fontSize: "18px",
                      },
                    },
                  }}
                  error={Boolean(errors?.name)}
                  onChange={handleChange}
                />
                {errors && (
                  <FormHelperText htmlFor="form-selector" error={!!errors.name}>
                    {errors.name}
                  </FormHelperText>
                )}
                <OutlinedInput
                  type="email" placeholder="E-mail"
                  name="email" className="mt-12"
                  fullWidth
                  inputProps={{
                    sx: {
                      height: 18,
                      "&::placeholder": {
                        opacity: 0.8,
                        fontSize: "18px",
                      },
                    },
                  }}
                  error={Boolean(errors?.email)}
                  onChange={handleChange}
                />
                {errors && (
                  <FormHelperText htmlFor="form-selector" error={!!errors.email}>
                    {errors.email}
                  </FormHelperText>
                )}
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-password"
                    fullWidth className="mt-12" name='password'
                    type={showPassword.password ? 'text' : 'password'}
                    placeholder="Password" onChange={handleChange}
                    error={Boolean(errors?.password)}
                    inputProps={{
                      sx: {
                        height: 18,
                        "&::placeholder": {
                          opacity: 0.8,
                          fontSize: "18px",
                        },
                      },
                    }}
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
                  <OutlinedInput
                    id="outlined-adornment-password" placeholder="Confirm Password"
                    fullWidth name='confirm_password'
                    className="mt-12" onChange={handleChange}
                    inputProps={{
                      sx: {
                        height: 18,
                        "&::placeholder": {
                          opacity: 0.8,
                          fontSize: "18px",
                        },
                      },
                    }}
                    error={Boolean(errors?.confirm_password)}
                    type={showPassword.confirm_password ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => handleClickShowPassword('confirm_password')}
                          onMouseDown={(e) => e.preventDefault()}
                          edge="end"
                        >
                          {showPassword.confirm_password ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {errors && (
                  <FormHelperText htmlFor="form-selector" error={!!errors.confirm_password}>
                    {errors.confirm_password}
                  </FormHelperText>
                )}
                <FlexDivRow className="mt-12">
                  <Checkbox className="term-checkbox" sx={{
                    pl: 0,
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                      borderRadius: 20
                    }
                  }} name='tc' onChange={(e) => setPayload({ ...userPayload, tc: e.target.checked })} />
                  <PrimaryText>I accept <PrimaryColorText>Terms & Conditions </PrimaryColorText> and <PrimaryColorText>Privacy Policy </PrimaryColorText></PrimaryText>
                </FlexDivRow>
                <FlexCenterColumn>
                  <Grid item className="register_button" sx={{ mt: 2, width: '50%', margin: 'auto', cursor: 'pointer' }} onClick={handleSubmit}>Sign up</Grid>
                </FlexCenterColumn>
                <Grid sx={{ mt: 3 }} >
                  <Grid className="or_signup_text" item >or signup with </Grid>
                </Grid>
                <Grid sx={{ mt: 3 }}>
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} className='login-div'>
                    <GoogleLogin
                      text='continue_with'
                      className='google_login_button_class'
                      onSuccess={credentialResponse => {
                        console.log('credentialResponse', credentialResponse);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid component='div' item sx={{
                  fontWeight: '400', fontSize: '16px',
                  display: 'flex', justifyContent: 'center', mt: '36px'
                }}>
                  <Grid item component='span' >Already Have an Account?</Grid>
                </Grid>
                <Grid item className="semi-outlined-button"
                  variant="outlined"
                  onClick={handleRedirect}
                  sx={{
                    width: "50%", margin: 'auto', cursor: 'pointer'
                  }}>
                  Log in
                </Grid>
              </Box>
            </FlexCenterColumn>
          </Container>
        </Grid>
      </Grid>
      <EmailVerification open={modelOpen} handleClose={() => setModelOpen(false)} />
    </>
  );
};

export default SignUpComponent;
