import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>
      <Grid container spacing={2} textAlign="center">
        <Grid item xs={6} sx={{ mt: 40 }}>
          <h1>Logo</h1>
        </Grid>
        <Grid item xs={6} sx={{ mt: 20 }}>
          <ThemeProvider theme={theme}>
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
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  >
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={ghgh}
                        // onMouseDown={hfhg}
                        edge="end"
                      >
                        {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                      </IconButton>
                    </InputAdornment>
                  </TextField>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, pl: 10, pr: 10 }}
                  >
                    Log in
                  </Button>
                  <Grid container spacing={3} textAlign="center">
                    <Grid item xs={4} sx={{ mt: 2.5 }}>
                      <hr></hr>
                    </Grid>
                    <Grid item xs={4}>
                      <p>or login with</p>
                    </Grid>
                    <Grid item xs={4} sx={{ mt: 2.5 }}>
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
                      New Here?
                    </Link>
                  </Grid>
                  <Button variant="outlined" sx={{ mb: 2 }}>
                    Create Account
                  </Button>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
                      color="inherit"
                      underline="hover"
                    >
                      {"Skip for Now"}
                    </Link>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </Grid>
      </Grid>
    </>
  );
};
