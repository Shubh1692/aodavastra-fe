import React from 'react';
import Layout from '../Layout';
import logo from '../../Assets/Images/project_logo_svg.svg';
import user from '../../Assets/Images/post-1.png';
import design1 from '../../Assets/Images/design1.svg';
import design2 from '../../Assets/Images/design2.svg';
import design3 from '../../Assets/Images/design3.svg';
import design4 from '../../Assets/Images/design4.svg';
import design5 from '../../Assets/Images/design5.svg';
import design6 from '../../Assets/Images/design6.svg';

import {
    Box,
    Typography,
    Stack,
    Grid,
    useTheme,
    Button

} from "@mui/material";
import './index.scss';
import { DesignerContainer, LightText } from '../../Utils/Common/component';
import theme from '../../Assets/Styles/theme';

const Home = () => {
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
                    <Grid conatiner sx={{ margin: '48px 0px', width: '1092px', display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item className='request_list'>
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
                        </Grid>
                        <Grid item className='request_list'>
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
                        </Grid>
                        <Grid item className='request_list'>
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
                        </Grid>
                        <Grid item className='request_list'>
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
                        </Grid>
                        <Grid item className='request_list'>
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
                        </Grid>
                    </Grid>
                    <Typography className='welcome_text' sx={{ borderBottom: '2px solid rgba(238, 187, 204, 0.7)' }}>Designers on ModaVastra</Typography>
                    <Grid sx={{width:'1275px',display:'flex', justifyContent:'space-between'}}>
                        <DesignerContainer><Box component={'img'} src={design6} /></DesignerContainer>
                        <DesignerContainer><Box component={'img'} src={design5} /></DesignerContainer>
                        <DesignerContainer><Box component={'img'} src={design4} /></DesignerContainer>
                        <DesignerContainer><Box component={'img'} src={design3} /></DesignerContainer>
                        <DesignerContainer><Box component={'img'} src={design2} /></DesignerContainer>
                        <DesignerContainer><Box component={'img'} src={design1} /></DesignerContainer>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Layout(Home)