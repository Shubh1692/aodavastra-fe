import React from "react";
import {
  Box,
  Typography,
  Stack,
  Grid,
  useTheme,
  Button,
  Paper,
  FormControlLabel,
  FormGroup,
  FormControl,
  InputLabel,
  OutlinedInput,
  Checkbox
} from "@mui/material";
import { TextField } from "@mui/material";
// import FormControl from "@mui/material";
// import { FormControlLabel } from "@mui/material";
// import { Checkbox } from "@mui/material";
import { FlexCenterColumn } from "../../Utils/Common/component";
import { PrimaryButton } from "../../Utils/Common/component";
import Layout from "../Layout";
import { flexbox } from "@mui/system";
import userLogo from "../../Assets/Images/ic_user_white.svg";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import { CheckBox } from "@mui/icons-material";
// import Layout from "../Layout";
const EditAddress = () => {
  const theme = useTheme();
  const saveAddress = (e) => {
    e.preventDefault();
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;

    document.getElementById(
      "currentAddress"
    ).innerText = `${address1} ${address2} ${city} ${state} ${zip}`;

    document.getElementById("address1").value = "";
    document.getElementById("address2").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zip").value = "";
  };
  return (
    <>
      <Box
        sx={{
          marginTop: "8pc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            // maxWidth: "1280px",
          }}
        >
          <Grid
            container
            columnSpacing={2}
            sx={{
              flexDirection: { xs: "column-reverse", md: "row" },
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            <Grid
              item
              lg={4}
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "end",
                pr: 4,
                borderRight: 2,
              }}
            >
              <Stack spacing={2} textAlign="left">
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#3C3C3C",
                    cursor: "pointer",
                    opacity: "0.7",
                  }}
                >
                  Your Information
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#3C3C3C",
                    cursor: "pointer",
                    opacity: "0.7",
                  }}
                >
                  Orders
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#3C3C3C",
                    cursor: "pointer",
                    opacity: "0.7",
                  }}
                >
                  Wishlist
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "#a484bd",
                    cursor: "pointer",
                  }}
                >
                  Address
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#3C3C3C",
                    cursor: "pointer",
                    opacity: "0.7",
                  }}
                >
                  Change Password
                </Typography>
                <Typography sx={{ color: "#D83B3B" }}>Log Out</Typography>
              </Stack>
            </Grid>
            <Grid item lg={5}>
              <Typography
                sx={{
                  color: '#3C3C3C', fontSize: '24px'
                }}>
                Edit Address
              </Typography>
              <Typography
                sx={{
                  color: '#3C3C3C', fontSize: '24px'
                }}>
                Name
              </Typography>
              <OutlinedInput fullWidth />

              <Grid container columnSpacing={2} rowSpacing={1}>
                <Grid item lg={12}><Typography
                  sx={{
                    color: '#3C3C3C', fontSize: '24px'
                  }}>
                  Mobile
                </Typography>
                  <OutlinedInput fullWidth />

                </Grid>
                <Grid item lg={6}><Typography
                  sx={{
                    color: '#3C3C3C', fontSize: '24px'
                  }}>
                  Pin
                </Typography>
                  <OutlinedInput fullWidth />

                </Grid>
                <Grid item lg={6}> <Typography
                  sx={{
                    color: '#3C3C3C', fontSize: '24px'
                  }}>
                  State
                </Typography>
                  <OutlinedInput fullWidth />

                </Grid>
                <Grid item lg={12}><Typography
                  sx={{
                    color: '#3C3C3C', fontSize: '24px'
                  }}>
                  Address line 1
                </Typography>
                  <OutlinedInput fullWidth />

                </Grid>
                <Grid item lg={12}><Typography
                  sx={{
                    color: '#3C3C3C', fontSize: '24px'
                  }}>
                  Address line 2
                </Typography>
                  <OutlinedInput fullWidth />

                </Grid>
                <Grid item lg={12}><Typography
                  sx={{
                    color: '#3C3C3C', fontSize: '24px'
                  }}>
                  City / District
                </Typography>
                  <OutlinedInput fullWidth />
                </Grid>
                <Grid  item lg={12} sx={{ display: 'flex', alignItems: 'center' }}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography sx={{
                    color: '#3C3C3C', fontSize: '18px'
                  }}>Make this my default address</Typography>} />
                  </FormGroup>
                </Grid>
                <Grid item lg={12}>
                  <Button fullWidth variant="contained" >Save Changes </Button>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};
export default Layout(EditAddress);
