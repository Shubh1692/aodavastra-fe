import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import { Image } from "@mui/icons-material";
import logo from "../../Assets/logo.jpeg";
import "./index.css";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Login } from "../Login";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      FullName: data.get("FullName"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    });
  };
  return (
    <>
      <Grid container spacing={2} textAlign="center" className="SignUpBody">
        <Grid item xs={6} sx={{ mt: 25 }}>
          <Box
            component="img"
            sx={{
              height: 500,
              width: 500,
              // maxHeight: { xs: 233, md: 167 },
              // maxWidth: { xs: 350, md: 250 },
            }}
            alt="The MODA VASTRA Logo"
            src={logo}
          />
        </Grid>
        <Grid item xs={6} sx={{ mt: 20 }}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  // required
                  fullWidth
                  id="FullName"
                  label="Full Name"
                  name="FullName"
                  autoComplete="FullName"
                />
                <TextField
                  margin="normal"
                  // required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  margin="normal"
                  // required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  // required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                />

                <Button
                  type="submit"
                  variant="contained"
                  // color="#ba68c8"
                  style={{
                    backgroundColor: "#ce93d8",
                  }}
                  sx={{ mt: 3, mb: 2, pl: 10, pr: 10 }}
                >
                  Sign up
                </Button>
                <Grid container spacing={3} textAlign="center">
                  <Grid item xs={4} sx={{ mt: 3, mr: 0 }}>
                    <hr></hr>
                  </Grid>
                  <Grid item xs={4} sx={{ p: 0, ml: 0, mr: 0 }}>
                    <h5>or SignUp with </h5>
                  </Grid>
                  <Grid item xs={4} sx={{ mt: 3 }}>
                    <hr></hr>
                  </Grid>
                </Grid>

                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    color="inherit"
                    underline="hover"
                  >
                    Already Have an Account
                  </Link>
                </Grid>
                <Button
                  variant="outlined"
                  style={{ color: "#424242", borderColor: "#424242" }}
                  sx={{ mb: 2 }}
                  onClick={Login}
                >
                  LogIn
                </Button>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
