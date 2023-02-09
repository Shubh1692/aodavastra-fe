import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import s1 from '../../Assets/Images/seller_1.svg';
import s2 from '../../Assets/Images/seller_2.svg';
import v1 from '../../Assets/Images/verticle1.svg';
import v2 from '../../Assets/Images/verticle2.svg';
import { BorderDesignerText, SemiDarkText } from '../../Utils/Common/styledComponent';
import Layout from '../Layout';
import './index.scss';
import { DesignerComponent } from '../../Utils/Common/component';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()
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
                    <Box sx={{ height: '360px', width: '224px', cursor: 'pointer' }} onClick={() => navigate('/dashboard/clothes')}>
                        <Box component={'img'} alt="product_image" src={s1} sx={{ height: '304px', width: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        <SemiDarkText className='semi_text'>Gorgeous Designer Saree ₹ 2,599.00</SemiDarkText>
                    </Box>
                    <Box sx={{ height: '360px', width: '224px', cursor: 'pointer' }} onClick={() => navigate('/dashboard/clothes')}>
                        <Box component={'img'} alt="product_image" src={s2} sx={{ height: '304px', width: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        <SemiDarkText className='semi_text'>Traditional Saree <br />₹ 2,599.00</SemiDarkText>
                    </Box>
                    <Box sx={{ height: '360px', width: '224px', cursor: 'pointer' }} onClick={() => navigate('/dashboard/clothes')}>
                        <Box component={'img'} alt="product_image" src={s1} sx={{ height: '304px', width: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        <SemiDarkText className='semi_text'>Net Multi Work Saree <br />₹ 2,599.00</SemiDarkText>
                    </Box>
                    <Box sx={{ height: '360px', width: '224px', cursor: 'pointer' }} onClick={() => navigate('/dashboard/clothes')}>
                        <Box component={'img'} alt="product_image" src={s2} sx={{ height: '304px', width: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        <SemiDarkText className='semi_text'>Silk Saree <br />₹ 2,599.00</SemiDarkText>
                    </Box>
                </Grid>
                <Grid sx={{ width: '1362px', margin: '48px 0px 7px', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ width: '49.35%', height: '373.33px', position: 'relative' }}>
                        <Box className='img_content' onClick={() => navigate('/dashboard/clothes')}>Accessories</Box>
                        <Box component={'img'} alt="product_image" src={v1} sx={{ height: 'auto', borderRadius: '18.66px', maxWidth: '100%' }} />
                    </Box>
                    <Box sx={{ width: '49.35%', height: '373.33px', position: 'relative' }}>
                        <Box className='img_content' onClick={() => navigate('/dashboard/clothes')}>CLOTHING</Box>
                        <Box component={'img'} src={v2} alt='img' sx={{ height: 'auto', borderRadius: '18.66px', maxWidth: '100%' }} />
                    </Box>
                </Grid>
                <BorderDesignerText>Designers on ModaVastra</BorderDesignerText>

                <DesignerComponent />

                <Box className='view_all_button'>View All</Box>

                <BorderDesignerText>our creative partners</BorderDesignerText>
                <Grid className='partner_container'>
                    <Box component={'img'} src={v1} alt='partner_img' />
                    <Box component={'img'} src={v2} alt='partner_img' />
                    <Box component={'img'} src={v1} alt='partner_img' />
                    <Box component={'img'} src={v2} alt='partner_img' />
                    <Box component={'img'} src={v1} alt='partner_img' />
                    <Box component={'img'} src={v2} alt='partner_img' />
                    <Box component={'img'} src={v1} alt='partner_img' />
                    <Box component={'img'} src={v2} alt='partner_img' />
                    <Box component={'img'} src={v1} alt='partner_img' />
                    <Box component={'img'} src={v2} alt='partner_img' />
                    <Box component={'img'} src={v1} alt='partner_img' />
                    <Box component={'img'} src={v2} alt='partner_img' />
                    <Box component={'img'} src={v1} alt='partner_img' />
                    <Box component={'img'} src={v2} alt='partner_img' />
                    <Box component={'img'} src={v1} alt='partner_img' />
                    <Box component={'img'} src={v2} alt='partner_img' />
                </Grid>
                <Grid className='become_creator_container'>
                    <Box sx={{ width: '417px' }}>
                        <Typography className='become_text'>Join Our Community of Growing Creators!</Typography>
                        <Box className='become_button'>Become a Creator!</Box>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(Dashboard);