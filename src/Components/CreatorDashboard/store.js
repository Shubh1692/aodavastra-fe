import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import v1 from '../../Assets/Images/verticle1.svg';
import './index.scss';
import theme from '../../Assets/Styles/theme';

const Store = () => {
    return (
        <>
            <Grid sx={{ background: theme.white }}>
                <Box sx={{ position: 'relative', marginTop: '16px' }}>
                    <Box className='store_image_content'>
                        <Typography>Jewellry</Typography>
                        <Typography variant='span'>(166 Items)</Typography>
                    </Box>
                    <Box component={'img'} alt="product_image" src={v1} sx={{ height: 'auto', maxWidth: '100%' }} />
                </Box>
                <Box sx={{ position: 'relative', marginTop: '16px' }}>
                    <Box className='store_image_content'>
                        <Typography>Jewellry</Typography>
                        <Typography variant='span'>(166 Items)</Typography>
                    </Box>
                    <Box component={'img'} alt="product_image" src={v1} sx={{ height: 'auto', maxWidth: '100%' }} />
                </Box>
            </Grid>
        </>
    )
}
export default Store;