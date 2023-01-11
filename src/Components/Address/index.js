import React from "react";
import { Box, Typography, Stack, Grid, useTheme, Button } from "@mui/material";
import { TextField } from "@mui/material";
// import FormControl from "@mui/material";
// import { FormControlLabel } from "@mui/material";
// import { Checkbox } from "@mui/material";
import { FlexCenterColumn } from "../../Utils/Common/component";
import { PrimaryButton } from "../../Utils/Common/component";
import Layout from "../Layout";
// import userLogo from "../../Assets/Images/ic_user_white.svg";
// import Layout from "../Layout";
const Address = () => {
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
    return (
      <>
        document.getElementById("address1").value = "",
        document.getElementById("address2").value = "",
        document.getElementById("city").value = "",
        document.getElementById("state").value = "",
        document.getElementById("zip").value = "",
      </>
    );
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
            columnSpacing={5}
            sx={{
              flexDirection: { xs: "column-reverse", md: "row" },
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
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
                  Account
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
                  Your Orders
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
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#3C3C3C",
                    cursor: "pointer",
                    opacity: "0.7",
                  }}
                >
                  Shopping Bag
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
                  Payment Settings
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "400",
                    color: "#3C3C3C",
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
            <Grid item lg={8} sm={12}>
              <Grid item lg={8} sm={12}>
                <Typography variant="h6">Current Address</Typography>
                <Box
                  sx={{
                    width: "500px",
                    height: "150px",
                    background: "#f9f9f9",
                    boxShadow: 3,
                    p: 1,
                    position: "relative",
                  }}
                >
                  <p id="currentAddress"></p>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "black",
                      borderColor: "black",
                      position: "relative",
                      top: "100px",
                      left: "330px",
                      pl: 8,
                      pr: 8,
                    }}
                  >
                    Edit
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                lg={8}
                sm={12}
                gridRow
                sx={{ position: "relative", top: "50px" }}
              >
                <Typography variant="h6" gutterBottom>
                  Enter New Address
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={10}>
                    <TextField
                      required
                      id="address1"
                      name="address1"
                      label="Address(House No, Building, Street,Area)"
                      fullWidth
                      autoComplete="shipping address-line1"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      id="address2"
                      name="address2"
                      label="Locality/Town"
                      fullWidth
                      required
                      autoComplete="shipping address-line2"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      required
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="shipping address-level2"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      required
                      id="state"
                      name="state"
                      label="State"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      required
                      id="zip"
                      name="zip"
                      label="Pin code"
                      fullWidth
                      autoComplete="shipping postal-code"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <FlexCenterColumn>
                  <PrimaryButton
                    sx={{
                      width: "30%",
                      margin: "auto",
                      marginLeft: "330px",
                    }}
                    onClick={saveAddress}
                  >
                    Add New Address
                  </PrimaryButton>
                </FlexCenterColumn>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};
export default Layout(Address);
