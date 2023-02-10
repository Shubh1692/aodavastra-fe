import React from 'react';
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import userLogo from "../../Assets/Images/user_logo.png";
import themes from "../../Assets/Styles/theme";

const Following = () => {
  return (
    <>
      <Grid item md={4} lg={4}>
        <Typography sx={{ fontSize: "24px", fontWeight: "400", margin: "0px 0px 8px 26px" }}>
          Followings
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "113.91px",
            background: themes.lightBackground,
            borderRadius: "5.1px",
            display: "flex",
            margin: "8.4px 0px",
          }}
        >
          <Box
            sx={{
              width: "93px",
              height: "93px",
              borderRadius: "50px",
              padding: "10.35px",
            }}
          >
            <Box
              component={"img"}
              src={userLogo}
              alt="demo_img"
              height={"100%"}
            />
          </Box>
          <Box className="follwer_user">
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: "10.35px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "23.3px",
                  lineHeight: "35px",
                }}
              >
                Sonali
              </Typography>
              <Box className="unfollow_button">Unfollow</Box>
            </Grid>
            <Grid
              sx={{
                fontSize: "18.1px",
                padding: "0px 10.35px",
              }}
            >
              In a world where you can be a king...
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "113.91px",
            background: themes.lightBackground,
            borderRadius: "5.1px",
            display: "flex",
            margin: "8.4px 0px",
          }}
        >
          <Box
            sx={{
              width: "93px",
              height: "93px",
              borderRadius: "50px",
              padding: "10.35px",
            }}
          >
            <Box component={'img'} src={userLogo} alt="demo_img" height={"100%"} />
          </Box>
          <Box className="follwer_user">
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: "10.35px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "23.3px",
                  lineHeight: "35px",
                }}
              >
                Sonali
              </Typography>
              <Box className="unfollow_button">Unfollow</Box>
            </Grid>
            <Grid
              sx={{
                fontSize: "18.1px",
                padding: "0px 10.35px",
              }}
            >
              In a world where you can be a king...
            </Grid>
          </Box>
        </Box>
      </Grid>
    </>
  )
}
export default Following;