import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import design1 from '../../Assets/Images/design1.svg';
import design2 from '../../Assets/Images/design2.svg';
import design3 from '../../Assets/Images/design3.svg';
import design4 from '../../Assets/Images/design4.svg';
import design5 from '../../Assets/Images/design5.svg';
import design6 from '../../Assets/Images/design6.svg';
import { DesignerContainer, LightText } from '../../Utils/Common/styledComponent';
import Ring from '../../Assets/Images/ring.svg';

import './index.scss';
export const DesignerComponent = () => {
    return (
        <Grid sx={{ width: '1275px', display: 'flex', justifyContent: 'space-between' }}>
            <DesignerContainer><Box component={'img'} src={design6} /></DesignerContainer>
            <DesignerContainer><Box component={'img'} src={design5} /></DesignerContainer>
            <DesignerContainer><Box component={'img'} src={design4} /></DesignerContainer>
            <DesignerContainer><Box component={'img'} src={design3} /></DesignerContainer>
            <DesignerContainer><Box component={'img'} src={design2} /></DesignerContainer>
            <DesignerContainer><Box component={'img'} src={design1} /></DesignerContainer>
        </Grid>
    )
}

export const BagProductDetails = () => {
    return (
        <Box className='bag_description'>
            <Box sx={{ display: 'flex' }}>
                <Box component={'img'} alt='product_img' src={Ring} />
                <Box sx={{ marginLeft: '12.3px' }}>
                    <Typography variant='h6'>American Diamond Bangles</Typography>
                    <Typography>by Seller’s Name</Typography>
                    <Typography>₹ 999.00</Typography>
                </Box>
            </Box>
            <Box className='bag_action'>
                <Box className='remove_from_bag'><Typography>Remove</Typography></Box>
                <Box className='wishlist_from_bag'><Typography>Move to Wishlist</Typography></Box>
            </Box>
        </Box>
    )
}