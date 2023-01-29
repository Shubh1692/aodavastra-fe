import React, { useState } from 'react'
import Layout from '../Layout';
import { Box, Button, Grid, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import profile_picture from '../../Assets/Images/post-1.png';
import cover_picture from '../../Assets/Images/cover_picture.svg';
import Instagram from '../../Assets/Images/Instagram.svg';
import Facebook from '../../Assets/Images/Facebook.svg';
import Snapchat from '../../Assets/Images/Snapchat.svg';
import ActivePost from '../../Assets/Images/colour_camera.svg';
import DeactivePost from '../../Assets/Images/without_colour_camera.svg';
import ActiveStore from '../../Assets/Images/colour_tag.svg';
import DeactiveStore from '../../Assets/Images/without_colour_tag.svg';

import './index.scss';
import theme from '../../Assets/Styles/theme';
import Store from './store';
import Posts from './posts';

const CreatorDashboard = () => {
    const [isStore, setValue] = useState(true);

    return (
        <>
            <Grid item lg={12} sx={{ background: '#F6EEFD' }}>
                <Box className='creator_container' sx={{}}>
                    <Box component={'img'} src={cover_picture} alt='cover_img' sx={{ width: '100%', height: '436px', margin: '8pc auto 0px' }} />
                    <Typography variant='span' className='creator_moda_text'>Moda Creator</Typography>
                    <Box sx={{ height: "215px" }}>
                        <Box className='creator_profile_image' >
                            <Box component={'img'} alt='profile_img' src={profile_picture} />
                            <Typography variant='span'>Sujata Bajaj</Typography>
                        </Box>
                        <Box className='follow_button'>
                            <Button variant='contained'>Follow</Button>
                            <Box sx={{ display: 'flex' }}>
                                <Box className='follow_content'>
                                    <Typography sx={{ fontWeight: 500 }} variant='span'>157</Typography>
                                    <Typography sx={{ fontWeight: 400, marginTop: '2px' }} variant='span'>Followers</Typography>
                                </Box>
                                <Box className='follow_content'>
                                    <Typography sx={{ fontWeight: 500 }} variant='span'>157</Typography>
                                    <Typography sx={{ fontWeight: 400, marginTop: '2px' }} variant='span'>Followers</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='creator_bio'>
                        <Typography>In a world where you can be anyone, be yourself 👑</Typography>
                        <Box className='social_icon'>
                            <Box component={'img'} alt='social_img' src={Instagram} />
                            <Box component={'img'} alt='social_img' src={Facebook} />
                            <Box component={'img'} alt='social_img' src={Snapchat} />
                        </Box>
                    </Box>
                    <Box className='creator_tabs'>
                        <Box onClick={() => setValue(true)} sx={isStore ? { background: theme.white } : {}}>
                            <Box component={'img'} alt='social_img' src={isStore ? ActiveStore : DeactiveStore} />
                            <Typography variant='span' sx={isStore ? { color: theme.primaryColor, fontWeight: 600 } : { color: theme.lightBlack, fontWeight: 400 }}>Store</Typography>
                        </Box>
                        <Box onClick={() => setValue(false)} sx={isStore ? {} : { background: theme.white }}>
                            <Box component={'img'} alt='social_img' src={isStore ? DeactivePost : ActivePost} />
                            <Typography variant='span' sx={isStore ? { color: theme.lightBlack, fontWeight: 400 } : { color: theme.primaryColor, fontWeight: 600 }}>Post</Typography>
                        </Box>
                    </Box>
                    {isStore ? <Store /> : <Posts />}
                </Box>
            </Grid>
        </>
    )
}
export default Layout(CreatorDashboard);