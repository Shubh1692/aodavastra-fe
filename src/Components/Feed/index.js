import React, { useState } from 'react';
import Layout from '../Layout';
import {
    Box,
    Divider,
    Grid,
    Typography,

} from "@mui/material";
import post1 from '../../Assets/Images/feed.svg';
import user from '../../Assets/Images/jwel_main.png';
import like from '../../Assets/Images/liked.svg';
import unlike from '../../Assets/Images/un_like.svg';
import comment from '../../Assets/Images/comment.svg';
import tagged from '../../Assets/Images/tagged.svg';
import './index.scss';
import { BolderText, BoldHeading, FeedText, TagPrize, TimeSection } from '../../Utils/Common/styledComponent';
import theme from '../../Assets/Styles/theme';
import TagPeople from '../Dialog/tagPeople';
import { CommentDialog } from '../Dialog/commentDialog';

const Feed = () => {
    const [liked, setLiked] = useState(false);
    const [isTagModel, setTagModel] = useState(false);
    const [isCommentModel, setCommentModel] = useState(false);
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
                <Grid container sx={{ width: '945px', marginBottom: '36px' }}>
                    <Grid sx={{ width: '50%', height: '699px', display: 'flex', flexDirection: 'column', background: theme.lighterPink }}>
                        <Box component="img" sx={{ height: 651, width: '100%',objectFit:'cover' }} src={post1} alt='feed_image' />
                        <Box sx={{ height: '100%', display: 'flex' }}>
                            <Box sx={{ width: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box component="img" sx={{ width: 22.7, height: 19.75, cursor: 'pointer' }}
                                    onClick={() => setLiked(!liked)}
                                    src={liked ? like : unlike} alt='feed_image'></Box>
                                <FeedText>146</FeedText>
                            </Box>
                            <Box sx={{ width: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box component="img" sx={{ height: 19.5, width: 19.5, cursor: 'pointer' }}
                                    onClick={() => setCommentModel(true)}
                                    src={comment} alt='feed_image'></Box>
                                <FeedText>14</FeedText>
                            </Box>
                            <Box sx={{ width: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box component="img" sx={{ height: 26, width: 26, cursor: 'pointer' }}
                                    onClick={() => setTagModel(true)}
                                    src={tagged} alt='feed_image'></Box>
                                <FeedText>5</FeedText>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid sx={{ width: '50%', paddingLeft: '23px' }}>
                        <Box sx={{ width: "100%", height: "81.8px", display: 'flex' }}>
                            <Box sx={{ width: "81.8px", height: "81.8px" }}>
                                <Box component={'img'} src={user} sx={{ borderRadius: "50px" }} alt="demo_img" height={"100%"} width={'100%'} />
                            </Box>
                            <Box sx={{ paddingLeft: '13.6px', width: '353px' }} className='feed_name'>
                                <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography sx={{ fontWeight: "400", fontSize: "24px", lineHeight: "36px", }}>
                                        Anjali Verma
                                    </Typography>
                                    <Box className="unfollow_button_feed">Follow</Box>
                                </Grid>
                                <TimeSection>7h ago</TimeSection>
                            </Box>
                        </Box>
                        <Typography className='feed_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque integer dolor sem hendrerit et maecenas. Pellentesque massa vulputate integer maecenas. Gravida accumsan in accumsan</Typography>
                        <BoldHeading>Tagged Products</BoldHeading>
                        <Box sx={{ height: '370px', marginTop: '12px', overflowY: 'scroll' }}>
                            <Box className='tag_container'>
                                <Box component={'img'} src={user} />
                                <Box component={'div'}>
                                    <BolderText>Silk Saree</BolderText>
                                    <TagPrize>₹ 2,599.00</TagPrize>
                                    <Typography className='tag_link'>View Details</Typography>
                                </Box>
                            </Box>
                            <Box className='tag_container'>
                                <Box component={'img'} src={user} />
                                <Box component={'div'}>
                                    <BolderText>Silk Saree</BolderText>
                                    <TagPrize>₹ 2,599.00</TagPrize>
                                    <Typography className='tag_link'>View Details</Typography>
                                </Box>
                            </Box>
                            <Box className='tag_container'>
                                <Box component={'img'} src={user} />
                                <Box component={'div'}>
                                    <BolderText>Silk Saree</BolderText>
                                    <TagPrize>₹ 2,599.00</TagPrize>
                                    <Typography className='tag_link'>View Details</Typography>
                                </Box>
                            </Box>
                            <Box className='tag_container'>
                                <Box component={'img'} src={user} />
                                <Box component={'div'}>
                                    <BolderText>Silk Saree</BolderText>
                                    <TagPrize>₹ 2,599.00</TagPrize>
                                    <Typography className='tag_link'>View Details</Typography>
                                </Box>
                            </Box>
                            <Box className='tag_container'>
                                <Box component={'img'} src={user} />
                                <Box component={'div'}>
                                    <BolderText>Silk Saree</BolderText>
                                    <TagPrize>₹ 2,599.00</TagPrize>
                                    <Typography className='tag_link'>View Details</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <TagPeople open={isTagModel} handleClose={() => setTagModel(false)} />
            <CommentDialog open={isCommentModel} handleClose={() => setCommentModel(false)} />
        </>
    )
}
export default Layout(Feed)