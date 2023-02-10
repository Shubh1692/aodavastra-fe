import React from 'react';
import Layout from '../Layout';
import logo from '../../Assets/Images/project_logo_svg.svg';
import user from '../../Assets/Images/post-1.png';

import { Box, Typography, Grid, Button } from "@mui/material";
import { LightText, BorderDesignerText } from '../../Utils/Common/styledComponent';
import { DesignerComponent } from '../../Utils/Common/component';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <Box
                sx={{
                    marginTop: '8pc',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Grid container className='welcome_page_conatiner'>
                    <Typography className='welcome_text'>WELCOME TO ModaVastra</Typography>
                    <Box component={'img'} src={logo} alt='logo' sx={{ width: '320px', height: '127px' }} />
                    <LightText>Follow some people to keep up with latest trends.</LightText>
                    <Grid sx={{ margin: '48px 0px', width: '1092px', display: 'flex', justifyContent: 'space-between' }}>
                        {[1, 2, 3, 4, 5].map((data) =>
                            <Grid item key={data} className='request_list' onClick={() => navigate('/feed')}>
                                <Box sx={{ paddingTop: '22.7px' }}><Box src={user} component={'img'} sx={{ width: 64, height: 64, borderRadius: '50px' }} /></Box>
                                <Typography component={'p'}>Anjali Verma</Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='image_container'>
                                    <Grid item lg={4}><Box src={user} sx={{ width: '100%' }} component={'img'} /></Grid>
                                    <Grid item lg={4}><Box src={user} sx={{ width: '100%' }} component={'img'} /></Grid>
                                    <Grid item lg={4}><Box src={user} sx={{ width: '100%' }} component={'img'} /></Grid>
                                    <Grid item lg={4}><Box src={user} sx={{ width: '100%' }} component={'img'} /></Grid>
                                    <Grid item lg={4}><Box src={user} sx={{ width: '100%' }} component={'img'} /></Grid>
                                    <Grid item lg={4}><Box src={user} sx={{ width: '100%' }} component={'img'} /></Grid>
                                </Box>
                                <Button variant="contained">Follow</Button>
                            </Grid>)}
                    </Grid>
                    <BorderDesignerText>Designers on ModaVastra</BorderDesignerText>
                    <DesignerComponent />
                </Grid>
            </Box>
        </>
    )
}
export default Layout(Home)