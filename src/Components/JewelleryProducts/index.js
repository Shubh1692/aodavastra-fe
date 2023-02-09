import React from "react";
import { Box, Typography, } from "@mui/material";
import Layout from "../Layout";
import './index.scss';
import jwel from "../../Assets/Images/seller_2.svg";
import { LightText, PurpleHeading } from "../../Utils/Common/styledComponent";
import { ProductContainer } from "../../Utils/Common/component";
import { useNavigate } from "react-router-dom";

const JewelleryProduct = () => {
  const navigate = useNavigate()
  return (<>
    <Box sx={{ marginTop: '8pc', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Box className="store_section">
        <Box component={'img'} sx={{ width: '282px', height: "282px" }} alt='store' src={jwel} />
        <Box sx={{ marginLeft: '32px', height: '80%' }}>
          <Box sx={{ display: 'flex', width: '590px', alignItems: 'center' }}>
            <Typography className="category">Jewellry</Typography>
            <Typography className="category_count">(166)</Typography>
          </Box>
          <Typography className="store_name">Sujata’s Store</Typography>
        </Box>
      </Box>
      <Box sx={{ margin: '62px 0px 32px' }}><PurpleHeading>Products</PurpleHeading></Box>
      <Box sx={{ width: '976px', display: 'flex', flexWrap: 'wrap' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((i) => (
          <Box onClick={() => navigate(`/dashboard/clothes/${i}`)} >
            <ProductContainer />
          </Box>
        ))}
      </Box>
      <Box className="load_button_product"><LightText>Load more</LightText></Box>
    </Box>
  </>);
};

export default Layout(JewelleryProduct);
