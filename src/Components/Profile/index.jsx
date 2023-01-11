import React from "react";
import { Box, Typography, Stack, Grid, useTheme } from "@mui/material";

import userLogo from "../../Assets/Images/ic_user_white.svg";
import Layout from "../Layout";
const Profile = () => {
  const theme = useTheme();
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
              sx={{ display: "flex", justifyContent: "end", pr: 4 }}
            >
              <Stack spacing={2} textAlign="left">
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "#3C3C3C",
                    cursor: "pointer",
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
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#3C3C3C",
                    cursor: "pointer",
                    opacity: "0.7",
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
            <Grid item lg={8} sx={{ borderLeft: 1 }}>
              <Box
                sx={{
                  width: "100%",
                  [theme.breakpoints.down("md")]: {
                    display: "flex,",
                    alignItems: "center",
                    justifyContent: "center",
                    width: " 100%",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100%",
                    background: "#A484BD",
                    p: 1,
                  }}
                >
                  <img src={userLogo} alt="" style={{ width: "100%" }} />
                </Box>
              </Box>
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  sx={{ fontSize: "22px", fontWeight: "500", color: "#3C3C3C" }}
                >
                  Name Surname
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "400", color: "#3C3C3C" }}
                >
                  This name will be shown on reviews you post and other
                  activities
                </Typography>
              </Box>
              <Stack sx={{ display: { xs: "none", md: "block" } }}>
                <Box sx={{ mt: 3 }}>
                  <Typography sx={{ fontSize: "22px", fontWeight: "400" }}>
                    Contact Number
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#3C3C3C",
                      opacity: "0.7",
                    }}
                  >
                    +91 89894 12123
                  </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography sx={{ fontSize: "22px", fontWeight: "400" }}>
                    E-mail ID
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#3C3C3C",
                      opacity: "0.7",
                    }}
                  >
                    example@email.com
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={3}
            p={0}
            sx={{
              flexDirection: { xs: "column-reverse", md: "row" },
              display: { xs: "flex", sm: "flex", md: "none" },
            }}
          >
            <Grid item lg={12}>
              <Box
                sx={{
                  width: "100%",
                  marginBottom: "10px",
                  "&.MuiBox-root": {
                    display: "flex",
                    alignItems: ";center",
                    justifyContent: "center",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100px",
                    borderRadius: "100%",
                    background: "#A484BD",
                    p: 1,
                  }}
                >
                  <img src={userLogo} alt="" style={{ width: "100%" }} />
                </Box>
              </Box>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ fontSize: "22px", fontWeight: "500", color: "#3C3C3C" }}
                >
                  Name Surname
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#3C3C3C",
                    width: "250px",
                  }}
                >
                  This name will be shown on reviews you post and other
                  activities
                </Typography>
              </Box>
              <Stack
                spacing={0.5}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Typography sx={{ fontSize: "22px", fontWeight: "400" }}>
                  Contact Number
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "400", color: "#3C3C3C" }}
                >
                  +91 89894 12123
                </Typography>
                <Typography sx={{ fontSize: "22px", fontWeight: "400" }}>
                  E-mail ID
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "400", color: "#3C3C3C" }}
                >
                  example@email.com
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
      <Box
        sx={{
          marginTop: "2pc",
          display: { xs: "flex", sm: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          background: "#F9F9F9",
        }}
      >
        <Stack
          sx={{
            width: "90%",
            maxWidth: "1280px",
          }}
        >
          <Grid
            container
            rowSpacing={3}
            p={0}
            sx={{
              flexDirection: { xs: "column-reverse", md: "row" },
              display: { xs: "flex", sm: "flex", md: "none" },
            }}
          >
            <Grid item xs={12} lg={12}>
              <Stack spacing={0} textAlign="left">
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#3C3C3C",
                    background: "#F9F9F9",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pt: 1,
                    cursor: "pointer",
                  }}
                >
                  Account
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#3C3C3C",
                    background: "#F9F9F9",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pt: 1,
                    cursor: "pointer",
                  }}
                >
                  Your Orders
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#3C3C3C",
                    background: "#F9F9F9",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pt: 1,
                    cursor: "pointer",
                  }}
                >
                  Wishlist
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#3C3C3C",
                    background: "#F9F9F9",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pt: 1,
                    cursor: "pointer",
                  }}
                >
                  Shopping Bag
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#3C3C3C",
                    background: "#F9F9F9",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pt: 1,
                    cursor: "pointer",
                  }}
                >
                  Payment Settings
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#3C3C3C",
                    background: "#F9F9F9",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pt: 1,
                    cursor: "pointer",
                  }}
                >
                  Address
                </Typography>
                <Typography
                  sx={{
                    color: "#D83B3B",
                    background: "#F9F9F9",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pt: 1,
                  }}
                >
                  Log Out
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};
export default Layout(Profile);
