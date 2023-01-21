import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "../Layout";
import jwel from "../../Assets/Images/jwel_main.png";
import prod from "../../Assets/Images/jwel.png";

const JewelleryProduct = () => {
  return (
    <>
      <Grid
        container
        spacing={7}
        justifyContent="center"
        // sm={12}
        // md={12}
        // lg={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: "5vh",
          //   ml: "100px",
          //   mr: "100px",
          //   ml: "0vh",
          //   alignSelf: "center",
        }}
      >
        <Grid item sm={12} md={12} lg={12} xl={12}>
          <Card
            sx={{
              // maxWidth: 345,
              display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              backgroundColor: "#F6EEFD",
              height: "30vh",
              width: "60vw",
              pl: 0,
              // textAlign: "center",
            }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardMedia
                component="img"
                height="140px"
                image={jwel}
                alt="green jwel"
                sx={{
                  width: "200px",
                  height: "200px",
                  position: "absolute",
                  left: "20px",
                }}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  left: "230px",
                  top: "5px",
                  fontFamily: "Poppins",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  Jewellry<span style={{ color: "#C5AFDA" }}>(166)</span>
                </Typography>
                <Typography
                  variant="h6"
                  color="#C5AFDA"
                  sx={{
                    fontWeight: "600",
                    fontSize: "42px",
                    lineHeight: "63px",
                    fontFamily: "Poppins",
                  }}
                >
                  Sujata's Store
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Typography
          gutterBottom
          variant="h2"
          component="div"
          sx={{
            fontWeight: "600",
            fontSize: "36px",
            lineHeight: "54px",
            color: "#A585C1",
            mt: 5,
          }}
        >
          Products
        </Typography>
        <Grid item sm={12} md={12} lg={12} xl={12}>
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60vw",
              height: "80vh",
            }}
          >
            <Grid item xs={12} sm={6} md={4} xl={3} spacing={3}>
              <Card
                sx={{
                  // maxWidth: 345,
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ffffff",
                  height: "292px",
                  width: "240px",
                  pl: 0,
                  boxShadow: "0",
                  // textAlign: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140px"
                    image={prod}
                    alt="green jwel"
                    sx={{
                      width: "224px",
                      height: "230px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "215px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#3C3C3C",
                    }}
                  >
                    <Typography gutterBottom variant="p" component="div">
                      Gorgeous Designer Saree
                    </Typography>
                    <Typography
                      variant="p"
                      color="#3C3C3C"
                      sx={{
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "Poppins",
                      }}
                    >
                      ₹ 2,999.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card
                sx={{
                  // maxWidth: 345,
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ffffff",
                  height: "292px",
                  width: "240px",
                  pl: 0,
                  boxShadow: "0",
                  // textAlign: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140px"
                    image={prod}
                    alt="green jwel"
                    sx={{
                      width: "224px",
                      height: "230px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "215px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#3C3C3C",
                    }}
                  >
                    <Typography gutterBottom variant="p" component="div">
                      Gorgeous Designer Saree
                    </Typography>
                    <Typography
                      variant="p"
                      color="#3C3C3C"
                      sx={{
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "Poppins",
                      }}
                    >
                      ₹ 2,999.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card
                sx={{
                  // maxWidth: 345,
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ffffff",
                  height: "292px",
                  width: "240px",
                  pl: 0,
                  boxShadow: "0",
                  // textAlign: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140px"
                    image={prod}
                    alt="green jwel"
                    sx={{
                      width: "224px",
                      height: "230px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "215px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#3C3C3C",
                    }}
                  >
                    <Typography gutterBottom variant="p" component="div">
                      Gorgeous Designer Saree
                    </Typography>
                    <Typography
                      variant="p"
                      color="#3C3C3C"
                      sx={{
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "Poppins",
                      }}
                    >
                      ₹ 2,999.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card
                sx={{
                  // maxWidth: 345,
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ffffff",
                  height: "292px",
                  width: "240px",
                  pl: 0,
                  boxShadow: "0",
                  // textAlign: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140px"
                    image={prod}
                    alt="green jwel"
                    sx={{
                      width: "224px",
                      height: "230px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "215px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#3C3C3C",
                    }}
                  >
                    <Typography gutterBottom variant="p" component="div">
                      Gorgeous Designer Saree
                    </Typography>
                    <Typography
                      variant="p"
                      color="#3C3C3C"
                      sx={{
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "Poppins",
                      }}
                    >
                      ₹ 2,999.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card
                sx={{
                  // maxWidth: 345,
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ffffff",
                  height: "292px",
                  width: "240px",
                  pl: 0,
                  boxShadow: "0",
                  // textAlign: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140px"
                    image={prod}
                    alt="green jwel"
                    sx={{
                      width: "224px",
                      height: "230px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "215px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#3C3C3C",
                    }}
                  >
                    <Typography gutterBottom variant="p" component="div">
                      Gorgeous Designer Saree
                    </Typography>
                    <Typography
                      variant="p"
                      color="#3C3C3C"
                      sx={{
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "Poppins",
                      }}
                    >
                      ₹ 2,999.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card
                sx={{
                  // maxWidth: 345,
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ffffff",
                  height: "292px",
                  width: "240px",
                  pl: 0,
                  boxShadow: "0",
                  // textAlign: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140px"
                    image={prod}
                    alt="green jwel"
                    sx={{
                      width: "224px",
                      height: "230px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "215px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#3C3C3C",
                    }}
                  >
                    <Typography gutterBottom variant="p" component="div">
                      Gorgeous Designer Saree
                    </Typography>
                    <Typography
                      variant="p"
                      color="#3C3C3C"
                      sx={{
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "Poppins",
                      }}
                    >
                      ₹ 2,999.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card
                sx={{
                  // maxWidth: 345,
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ffffff",
                  height: "292px",
                  width: "240px",
                  pl: 0,
                  boxShadow: "0",
                  // textAlign: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140px"
                    image={prod}
                    alt="green jwel"
                    sx={{
                      width: "224px",
                      height: "230px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "215px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#3C3C3C",
                    }}
                  >
                    <Typography gutterBottom variant="p" component="div">
                      Gorgeous Designer Saree
                    </Typography>
                    <Typography
                      variant="p"
                      color="#3C3C3C"
                      sx={{
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "Poppins",
                      }}
                    >
                      ₹ 2,999.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card
                sx={{
                  // maxWidth: 345,
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ffffff",
                  height: "292px",
                  width: "240px",
                  pl: 0,
                  boxShadow: "0",
                  // textAlign: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140px"
                    image={prod}
                    alt="green jwel"
                    sx={{
                      width: "224px",
                      height: "230px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "215px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#3C3C3C",
                    }}
                  >
                    <Typography gutterBottom variant="p" component="div">
                      Gorgeous Designer Saree
                    </Typography>
                    <Typography
                      variant="p"
                      color="#3C3C3C"
                      sx={{
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "Poppins",
                      }}
                    >
                      ₹ 2,999.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card
                sx={{
                  // maxWidth: 345,
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ffffff",
                  height: "292px",
                  width: "240px",
                  pl: 0,
                  boxShadow: "0",
                  // textAlign: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140px"
                    image={prod}
                    alt="green jwel"
                    sx={{
                      width: "224px",
                      height: "230px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "215px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#3C3C3C",
                    }}
                  >
                    <Typography gutterBottom variant="p" component="div">
                      Gorgeous Designer Saree
                    </Typography>
                    <Typography
                      variant="p"
                      color="#3C3C3C"
                      sx={{
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "Poppins",
                      }}
                    >
                      ₹ 2,999.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card
                sx={{
                  // maxWidth: 345,
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ffffff",
                  height: "292px",
                  width: "240px",
                  pl: 0,
                  boxShadow: "0",
                  // textAlign: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140px"
                    image={prod}
                    alt="green jwel"
                    sx={{
                      width: "224px",
                      height: "230px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "215px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#3C3C3C",
                    }}
                  >
                    <Typography gutterBottom variant="p" component="div">
                      Gorgeous Designer Saree
                    </Typography>
                    <Typography
                      variant="p"
                      color="#3C3C3C"
                      sx={{
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "Poppins",
                      }}
                    >
                      ₹ 2,999.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card
                sx={{
                  // maxWidth: 345,
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ffffff",
                  height: "292px",
                  width: "240px",
                  pl: 0,
                  boxShadow: "0",
                  // textAlign: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140px"
                    image={prod}
                    alt="green jwel"
                    sx={{
                      width: "224px",
                      height: "230px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "215px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#3C3C3C",
                    }}
                  >
                    <Typography gutterBottom variant="p" component="div">
                      Gorgeous Designer Saree
                    </Typography>
                    <Typography
                      variant="p"
                      color="#3C3C3C"
                      sx={{
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "Poppins",
                      }}
                    >
                      ₹ 2,999.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <Card
                sx={{
                  // maxWidth: 345,
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ffffff",
                  height: "292px",
                  width: "240px",
                  pl: 0,
                  boxShadow: "0",
                  // textAlign: "center",
                }}
              >
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140px"
                    image={prod}
                    alt="green jwel"
                    sx={{
                      width: "224px",
                      height: "230px",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "215px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#3C3C3C",
                    }}
                  >
                    <Typography gutterBottom variant="p" component="div">
                      Gorgeous Designer Saree
                    </Typography>
                    <Typography
                      variant="p"
                      color="#3C3C3C"
                      sx={{
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "Poppins",
                      }}
                    >
                      ₹ 2,999.00
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Button variant="outlined">Load more</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout(JewelleryProduct);
