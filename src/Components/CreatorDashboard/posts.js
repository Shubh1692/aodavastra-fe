import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import v1 from '../../Assets/Images/verticle1.svg';
import post1 from '../../Assets/Images/post-1.png';
import play from '../../Assets/Images/play.svg';
import theme from '../../Assets/Styles/theme';
import './index.scss';

const Posts = () => {
    return (
        <>
            <Grid sx={{ background: theme.white }}>
                <Grid container sx={{ marginTop: '16px' }}>
                    <Grid item lg={4} md={4} sx={{ height: '317px', position: 'relative' }}>
                        <Box component={'img'} alt="play" src={play} sx={{ position: 'absolute', right: '16.7px', top: '16px' }} />
                        <Box component={'img'} alt="product_image" src={v1} sx={{ height: '100%', maxWidth: '100%', objectFit: "cover" }} />
                    </Grid>
                    <Grid item lg={4} md={4} sx={{ height: '317px' }}>
                        <Box component={'img'} alt="product_image" src={post1} sx={{ height: '100%', maxWidth: '100%', objectFit: "cover" }} />
                    </Grid>
                    <Grid item lg={4} md={4} sx={{ height: '317px' }}>
                        <Box component={'img'} alt="product_image" src={v1} sx={{ height: '100%', maxWidth: '100%', objectFit: "cover" }} />
                    </Grid>
                    <Grid item lg={4} md={4} sx={{ height: '317px' }}>
                        <Box component={'img'} alt="product_image" src={post1} sx={{ height: '100%', maxWidth: '100%', objectFit: "cover" }} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Posts;