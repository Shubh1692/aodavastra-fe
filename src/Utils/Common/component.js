import React from 'react';
import { Box, Grid, } from "@mui/material";
import design1 from '../../Assets/Images/design1.svg';
import design2 from '../../Assets/Images/design2.svg';
import design3 from '../../Assets/Images/design3.svg';
import design4 from '../../Assets/Images/design4.svg';
import design5 from '../../Assets/Images/design5.svg';
import design6 from '../../Assets/Images/design6.svg';
import { DesignerContainer, LightText } from '../../Utils/Common/styledComponent';

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