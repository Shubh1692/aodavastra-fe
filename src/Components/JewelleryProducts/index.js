import {
  Box,
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
import './index.scss';
import jwel from "../../Assets/Images/seller_2.svg";
import { LightText, PurpleHeading } from "../../Utils/Common/styledComponent";
import { ProductContainer } from "../../Utils/Common/component";
import theme from "../../Assets/Styles/theme";

const JewelleryProduct = () => {
  return (<>
    <Box sx={{ marginTop: '8pc', display: 'flex', alignItems: 'center', flexDirection:'column' }}>
      <Box className="store_section">
        <Box component={'img'} sx={{ width: '282px', height: "282px" }} alt='store' src={jwel} />
        <Box sx={{ marginLeft: '32px', height: '80%' }}>
          <Box sx={{ display: 'flex', width: '590px' }}>
            <Typography className="category">Jewellry</Typography>
            <Typography className="category_count">(166)</Typography>
          </Box>
          <Typography className="store_name">Sujata’s Store</Typography>
        </Box>
      </Box>
      <Box sx={{ margin: '62px 0px 32px' }}><PurpleHeading>Products</PurpleHeading></Box>
      <Box sx={{ width: '976px', display: 'flex', flexWrap: 'wrap' }}>
        <ProductContainer /><ProductContainer /><ProductContainer />
        <ProductContainer /><ProductContainer /><ProductContainer />
      </Box>
      <Box className="load_button_product"><LightText>Load more</LightText></Box>
    </Box>
  </>);
};

export default Layout(JewelleryProduct);
