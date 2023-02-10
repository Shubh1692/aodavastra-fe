import React, { useState } from "react";
import {
  Grid, Button, FormControl, OutlinedInput, Box, Container,
  InputAdornment, IconButton, Checkbox, FormHelperText
} from "@mui/material";
import logo from "../../Assets/Images/project_logo_svg.svg";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FlexCenterColumn, PrimaryText, FlexDivRow, PrimaryColorText } from "../../Utils/Common/styledComponent";
import { toast } from "react-toastify";
import { EmailVerification } from "../dialog/emailVerification";
import AuthService from "../../Services/Auth.service";
import "../index.scss";
import { withCookies } from "react-cookie";

const SignUpComponent = ({
  cookies
}) => {
  const navigate = useNavigate();
  const [modelOpen, setModelOpen] = useState(false);
  const [loading, setLoading] = useState(false)
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
    tc: ''
  })

  const handleClickShowPassword = (key) => setShowPassword({ ...showPassword, [key]: !showPassword[key] });

  const handleChange = (e) => {
    setErrors({ ...errors, [e.target.name]: '' })
    setPayload({ ...userPayload, [e.target.name]: e.target.value })
  }

  const handleTerms = (e) => {
    setPayload({ ...userPayload, tc: e.target.checked })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userPayload?.email === '' || userPayload?.password === '' || userPayload?.name === '' || userPayload?.confirm_password === '' || !userPayload.tc) {
      if (userPayload?.email === '' && userPayload?.password === '' && userPayload?.confirm_password === '' && userPayload?.name === '' && !userPayload?.tc) {
        setErrors({
          email: 'Email is required field.',
          password: 'Password is required field.',
          name: 'Name is required field.',
          confirm_password: 'Confirm password is required field.',
          tc: 'Accept term and condition.'
        })
      }
      else {
        if (userPayload?.email === '') {
          setErrors({ email: 'Email required field.' })
        }
        else if (userPayload?.name === '') {
          setErrors({ name: 'Name required field.' })
        }
        else if (userPayload?.password === '') {
          setErrors({ password: 'Password required field.' })
        }
        else if (userPayload?.confirm_password === '') {
          setErrors({ confirm_password: 'Confirm password required field.' })
        } else if (!userPayload?.tc) {
          setErrors({ tc: 'Accept term and condition.' })
        }
      }
    }
    else {
      if (userPayload?.password !== userPayload?.confirm_password) {
        setErrors({ confirm_password: 'Confirm password not matched.' })
      } else {
        setLoading(true)
        AuthService.signup(userPayload).then((result) => {
          setLoading(false)
          if (result.data && result.data.token) {
            cookies.set('token', result.data.token);
            toast['success']('User created successfully!')
            navigate('/')
          }
        }).catch((err) => {
          setLoading(false)
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
        })
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
          <Container component="main" maxWidth="xs" sx={{ ml: 0 }}>
            <FlexCenterColumn>
              <Box sx={{ width: '467px' }} component={'form'} noValidate onSubmit={handleSubmit} >
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
                  }} name='tc' onChange={handleTerms} />
                  <PrimaryText>I accept <PrimaryColorText>Terms & Conditions </PrimaryColorText> and <PrimaryColorText>Privacy Policy </PrimaryColorText></PrimaryText>
                </FlexDivRow>
                {errors && (
                  <FormHelperText htmlFor="form-selector" error={!!errors.tc}>
                    {errors.tc}
                  </FormHelperText>
                )}
                <FlexCenterColumn>
                  <Button variant="contained" type='submit' disabled={loading} className="register_button" sx={{ mt: 2, width: '50%', margin: 'auto' }}>Sign up</Button>
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
                <Grid item className="linear-button"
                  variant="outlined"
                  onClick={() => navigate('/login')}
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

export default withCookies(SignUpComponent);
