import React from "react";
import { Box, AppBar, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import headerLogo from "../../Assets/Images/ModavastraLogo_Black 2.svg";
import closet from "../../Assets/Images/closet_black.svg";
import SearchImage from "../../Assets/Images/search.svg";
import shopingBag from "../../Assets/Images/shopping-bag.svg";
import userLogo from "../../Assets/Images/ic_user_white.svg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useLocation } from "react-router-dom";
import theme from "../../Assets/Styles/theme";
import "./index.scss";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../Utils/Common/component";

const Header = () => {
  const navigate = useNavigate();
  let location = useLocation();

  console.log("navigate-------->", location.pathname);
  return (
    <>
      <AppBar position="fixed">
        <Box
          sx={{
            background: theme.white,
            height: theme.headerHeight,
            display: "flex",
            padding: " 0px 75px 0px 119px",
          }}
        >
          <Grid
            container
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item lg={4} md={4}>
              <Box
                component={"img"}
                onClick={() => navigate("/")}
                src={headerLogo}
                alt="header_logo"
                width="104px"
                height="41"
                style={{ cursor: "pointer" }}
              />
            </Grid>
            {location.pathname === "/search" && (
              <Grid item lg={4} md={4}>
                <Box
                  className="search_container"
                  sx={{ width: { xl: "466px", lg: "100%" } }}
                >
                  <Search>
                    <SearchIconWrapper>
                      <Box component={"img"} src={SearchImage} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search Here"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                  {/* <Search>
            <SearchIconWrapper >
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                // className='cursor-pointer' onClick={() => setSearch(!OpenSearch)}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search> */}
                  {/* <TextField
                    sx={{ border: "none" }}
                    label="With normal TextField"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                        </IconButton>
                      </InputAdornment>
                    }
                  /> */}
                </Box>
              </Grid>
            )}
            <Grid
              item
              lg={4}
              md={4}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Link to="/">
                  <Box sx={{ cursor: "pointer", display: "flex" }}>
                    <Box
                      component={"img"}
                      src={closet}
                      alt="closet"
                      sx={{ width: "50px", height: "30px" }}
                    />
                  </Box>
                </Link>
                <Link to="/search">
                  <Box sx={{ cursor: "pointer", display: "flex" }}>
                    <Box
                      component={"img"}
                      src={SearchImage}
                      alt="search"
                      sx={{ width: "30px", height: "30px" }}
                    />
                  </Box>
                </Link>
                <Link to="/emptybag">
                  <Box sx={{ cursor: "pointer", display: "flex" }}>
                    <Box
                      component={"img"}
                      src={shopingBag}
                      alt="bag"
                      sx={{ width: "28px", height: "30px" }}
                    />
                  </Box>
                </Link>
                <Link to="/profile">
                  <Box
                    sx={{
                      cursor: "pointer",
                      width: "43px",
                      height: "43px",
                      borderRadius: theme.rounded,
                      background: theme.primaryColor,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src={userLogo}
                      alt=""
                      sx={{ width: "30px", height: "30px" }}
                    />
                  </Box>
                </Link>
              </Stack>
            </Grid>
          </Grid>
          <Grid
            container
            border={1}
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                sm: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid
              item
              lg={4}
              sx={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box onClick={() => navigate("/")} sx={{ color: "black" }}>
                <ArrowBackIosIcon sx={{ marginRight: "15px" }} />
              </Box>
              <Box
                sx={{
                  width: "100px",
                  justifyContent: "flex-start",
                }}
              >
                <Link to="/">
                  <Box component={"img"} src={headerLogo} alt="" />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </AppBar>
    </>
  );
};
export default Header;
