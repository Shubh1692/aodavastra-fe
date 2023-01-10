import React from "react";
import {
  Box,
  AppBar,
  Link,
  Grid,
  OutlinedInput, Stack, InputAdornment, TextField,
} from "@mui/material";
import { useTheme } from "@mui/system";

import SearchIcon from '@mui/icons-material/Search';
import headerLogo from '../../Assets/Images/ModavastraLogo_Black 2.svg';
import heart from '../../Assets/Images/Vector.svg';
import shopingBag from '../../Assets/Images/shopping-bag.svg';
import userLogo from '../../Assets/Images/ic_user_white.svg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  // const { width } = useWindowDimensions();
  // const [menuToggle, setMenuToggle] = useState(false);



  return (
    <>
      <AppBar position="fixed" >
        <Box
          sx={{
            background: "#FFFFFF",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ width: "90%", maxWidth: "1280px" }}>
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
                alignItems: 'center'
              }}
            >
              <Grid
                item
                lg={4}
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    width: "100px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Link href="/">
                    <img src={headerLogo} alt="" />
                  </Link>
                </Box>

              </Grid>
              <Grid item lg={4} sx={{ color: '#000' }}>
                <  TextField fullWidth size="small" disabledunderline='true'
                  placeholder="Search Products"
                  sx={{
                    border: 'none', background: '#E9E9E9', outline: 'none'
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon
                          sx={{ width: '25px', height: '25px', color: '#3C3C3C' }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Stack direction='row' spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                  <Link href="/">
                    <Box sx={{ width: '25px', cursor: 'pointer' }}>
                      <img src={heart} alt='' style={{ width: '100%' }} />
                    </Box>
                  </Link>
                  <Link href="/">
                    <Box sx={{ width: '25px', cursor: 'pointer' }}>
                      <img src={shopingBag} alt='' style={{ width: '100%' }} />
                    </Box>
                  </Link>
                  <Link href="/profile">
                    <Box sx={{ cursor: 'pointer', width: '34px', fontSize: '35px', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyItems: 'center', p: 1, background: '#A484BD' }}>
                      <img src={userLogo} alt='' style={{ width: '100%' }} />
                    </Box>
                  </Link>
                </Stack>
              </Grid>
            </Grid>
            <Grid
              container
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
                alignItems: 'center'
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
                 <Box onClick={()=>navigate('/')} sx={{color:'black'}}><ArrowBackIosIcon sx={{marginRight:'15px'}}/></Box>
                <Box
                  sx={{
                    width: "100px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Link href="/">
                    <img src={headerLogo} alt="" />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </AppBar>


    </>
  );
};
export default Header;
