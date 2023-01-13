import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Grid,
  useTheme,
  OutlinedInput,
} from "@mui/material";

import Layout from "../Layout";
import { LeftNavbar } from "../Leftbar";
import themes from "../../Assets/Styles/theme";
import userLogo from "../../Assets/Images/user_logo.png";
import closet from "../../Assets/Images/closet.svg";
import nextButton from "../../Assets/Images/next_button.svg";
import "../index.scss";
const Profile = () => {
  const theme = useTheme();
  const [isEdit, setIsEdit] = useState(false);

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
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            }}
          >
            <Grid
              item
              md={4}
              lg={4}
              sx={{ display: "flex", justifyContent: "end", pr: 4 }}
            >
              <LeftNavbar />
            </Grid>
            <Grid item md={4} lg={4}>
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
                <Box sx={{ width: "144px", height: "144px", margin: "auto" }}>
                  <img src={userLogo} alt="user_logo" />
                </Box>
              </Box>
              {!isEdit ? (
                <Grid sx={{ display: "flex", margin: "22px 0px 24px 0px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "50%",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "24px",
                        marginRight: "3px",
                        fontWeight: "400",
                        color: "#3C3C3C",
                      }}
                    >
                      157
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        marginLeft: "3px",
                        fontWeight: "400",
                        color: "#3C3C3C",
                      }}
                    >
                      Following
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        marginRight: "3px",
                        fontWeight: "400",
                        color: "#3C3C3C",
                      }}
                    >
                      5
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        marginLeft: "3px",
                        fontWeight: "400",
                        color: "#3C3C3C",
                      }}
                    >
                      Liked Posts
                    </Typography>
                  </Box>
                </Grid>
              ) : (
                <Grid
                  item
                  className="semi-outlined-button"
                  variant="outlined"
                  sx={{
                    width: "50%",
                    margin: "24px auto",
                    cursor: "pointer",
                  }}
                >
                  Change Picture
                </Grid>
              )}
              <Grid>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "25.4px", fontWeight: "400" }}>
                    Name
                  </Typography>
                  {!isEdit && (
                    <Typography
                      sx={{
                        fontSize: "14.8",
                        fontWeight: "600",
                        textDecorationLine: "underline",
                        color: themes.primaryColor,
                        cursor: "pointer",
                      }}
                      onClick={() => setIsEdit(true)}
                    >
                      Edit Profile
                    </Typography>
                  )}
                </Grid>
                <OutlinedInput
                  placeholder="Anjali Verma"
                  size="small"
                  fullWidth
                  name="name"
                />
                <Grid sx={{ marginTop: "19px" }}>
                  <Typography sx={{ fontSize: "25.4px", fontWeight: "400" }}>
                    Bio
                  </Typography>
                  <OutlinedInput
                    placeholder="In a world where you can be anyone, be yourself 👑"
                    size="small"
                    fullWidth
                    name="bio"
                    multiline
                    rows={3}
                  />
                </Grid>

                {!isEdit ? (
                  <Grid className="become_creator">
                    <img
                      src={closet}
                      width="38"
                      height="24"
                      alt="become_logo"
                    />
                    <Typography>Become a ModaVastra creator</Typography>
                    <img src={nextButton} alt="next_logo" />
                  </Grid>
                ) : (
                  <Grid className='save_changes'>
                    Save Changes
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid item md={4} lg={4}></Grid>
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
