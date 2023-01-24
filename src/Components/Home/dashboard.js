import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import s1 from '../../Assets/Images/selller_1.svg';
import s2 from '../../Assets/Images/seller_2.svg';
import s3 from '../../Assets/Images/seller_3.svg';
import s4 from '../../Assets/Images/seller_4.svg';
import v1 from '../../Assets/Images/verticle1.svg';
import v2 from '../../Assets/Images/verticle2.svg';
import { BorderDesignerText, SemiDarkText } from '../../Utils/Common/styledComponent';
import Layout from '../Layout';
import './index.scss';

const Dashboard = () => {
    return (
        <>
            <Box sx={{
                marginTop: '6pc',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: 'column'
            }}>
                <BorderDesignerText>BEST SELLERS</BorderDesignerText>
                <Grid sx={{ width: '956px', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ height: '360px', width: '224px' }}>
                        <Box component={'img'} src={s1} sx={{ height: '304px', borderRadius: '10px' }} />
                        <SemiDarkText className='semi_text'>Gorgeous Designer Saree ₹ 2,599.00</SemiDarkText>
                    </Box>
                    <Box sx={{ height: '360px', width: '224px' }}>
                        <Box component={'img'} src={s2} sx={{ height: '304px', borderRadius: '10px' }} />
                        <SemiDarkText className='semi_text'>Traditional Saree <br />₹ 2,599.00</SemiDarkText>
                    </Box>
                    <Box sx={{ height: '360px', width: '224px' }}>
                        <Box component={'img'} src={s3} sx={{ height: '304px', borderRadius: '10px' }} />
                        <SemiDarkText className='semi_text'>Net Multi Work Saree <br />₹ 2,599.00</SemiDarkText>
                    </Box>
                    <Box sx={{ height: '360px', width: '224px' }}>
                        <Box component={'img'} src={s4} sx={{ height: '304px', borderRadius: '10px' }} />
                        <SemiDarkText className='semi_text'>Silk Saree <br />₹ 2,599.00</SemiDarkText>
                    </Box>
                </Grid>
                <Grid sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ width: '49%', height: '373.33px' ,position:'relative'}}>
                        <Box className='img_content'>Accessories</Box>
                        <Box component={'img'} src={v1} alt='img' sx={{}} />
                    </Box>
                    <Box sx={{ width: '49%', height: '373.33px' ,position:'relative'}}>
                        <Box className='img_content'>CLOTHING</Box>
                        <Box component={'img'} src={v2} alt='img' sx={{}} />
                    </Box>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(Dashboard);