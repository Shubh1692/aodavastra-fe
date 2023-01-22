import React, { useState } from "react";
import {
  Button, FormControl, InputLabel, Box, Container,
  OutlinedInput, InputAdornment, IconButton, FormHelperText, Typography
} from "@mui/material";
import Grid from "@mui/material/Grid";
import logo from "../../Assets/Images/project_logo_svg.svg";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FlexCenterColumn, PrimaryButton, FlexDivRow, PrimaryColorText } from "../../Utils/Common/component";
import HttpService from "../../Services/Http.service";
import { toast } from "react-toastify";
import { api_base_url } from "../../Utils/Common/urls";
import '../index.scss';

const LoginComponent = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userPayload, setPayload] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    setErrors({ ...errors, [e.target.name]: '' })
    setPayload({ ...userPayload, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userPayload?.email === '' || userPayload?.password === '') {
      if (userPayload?.email === '' && userPayload?.password === '') {
        setErrors({
          email: 'Email is required field',
          password: 'Password is required field',
        })
      }
      else {
        if (userPayload?.email === '') {
          setErrors({ email: 'Email required field' })
        } else if (userPayload?.password === '') {
          setErrors({ password: 'Password required field' })
        }
      }
      console.log('userPayload', userPayload)
    } else {
      try {
        const result = await HttpService.post(api_base_url + '/user/login', userPayload);
        if (result.data && result.data.token) {
          localStorage.setItem('access_token', result.data.token);
          toast['success']('Logged in successfully!')
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

  const handleRedirect = () => {
    navigate('/register')
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
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <FlexCenterColumn>
                <OutlinedInput
                  type="email" placeholder="E-mail"
                  name="email" inputProps={{
                    sx: {
                      height: 18,
                      "&::placeholder": {
                        opacity: 0.8,
                        fontSize: "18px",
                      },
                    },
                  }}
                  fullWidth
                  error={Boolean(errors?.email)}
                  onChange={handleChange}
                />
                {errors && (
                  <FormHelperText htmlFor="form-selector" error={!!errors.email}>
                    {errors.email}
                  </FormHelperText>
                )}
                {/* <FormControl sx={{ width: '100%' }} variant="outlined"> */}
                <OutlinedInput fullWidth
                  className="mt-12" name='password'
                  type={showPassword ? 'text' : 'password'}
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {/* </FormControl> */}
                {errors && (
                  <FormHelperText htmlFor="form-selector" error={!!errors.password}>
                    {errors.password}
                  </FormHelperText>
                )}
                <Grid item sx={{ mb: '12px', mt: '12px', textAlign: 'end' }}>
                  <Typography className="forgot_text" onClick={() => navigate('/recover-password')}>Forgot Password?</Typography>
                </Grid>
                <FlexCenterColumn>
                  <Grid item className="login_button" sx={{ mt: 5, width: '50%', margin: 'auto' }} onClick={handleSubmit}>Log in</Grid>
                </FlexCenterColumn>
                <Grid sx={{ mt: 3 }} >
                  <Grid className="or_signup_text" item >or login with </Grid>
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
                  <Grid item component='span' >New here?</Grid>
                </Grid>
                <Grid item
                  className="semi-outlined-button"
                  variant="outlined"
                  onClick={handleRedirect}
                  sx={{
                    width: "50%", margin: 'auto', cursor: 'pointer'
                  }}>
                  Create Account
                </Grid>
              </FlexCenterColumn>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginComponent;
