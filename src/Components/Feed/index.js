/* eslint-disable no-sequences */
import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import {
    Box,
    Card,
    CardMedia,
    Divider,
    Grid,
    Typography,

} from "@mui/material";
import user from '../../Assets/Images/seller_1.svg';
import like from '../../Assets/Images/liked.svg';
import unlike from '../../Assets/Images/un_like.svg';
import comment from '../../Assets/Images/comment.svg';
import tagged from '../../Assets/Images/tagged.svg';
import './index.scss';
import { BolderText, BoldHeading, FeedText, TagPrize, TimeSection } from '../../Utils/Common/styledComponent';
import theme from '../../Assets/Styles/theme';
import TagPeople from '../dialog/tagPeople';
import { CommentDialog } from '../dialog/commentDialog';
import { useNavigate } from 'react-router-dom';
import { PostService } from '../../Services';
import InfiniteScroll from "react-infinite-scroll-component";

let page = 1;

const postsList = async (posts, setPosts, active) => {
    const result = await PostService.getAll(page, 10)
    if (result.status < 400) {
        if (active === 'pagination') {
            page = page + 1
            setPosts([...posts, ...result.data.data])
        }else{
            setPosts(result.data.data)
        }
    }
}

const Feed = () => {
    const [liked, setLiked] = useState(false);
    const [isTagModel, setTagModel] = useState({
        model: false,
        data: null
    });
    const [isCommentModel, setCommentModel] = useState({
        model: false,
        data: null
    });
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        postsList(posts, setPosts);
    }, [])

    console.log('=======>', posts)
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
                <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <InfiniteScroll
                        dataLength={posts.length} //This is important field to render the next data
                        next={() => { postsList(posts, setPosts, 'pagination') }}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}>
                        {posts?.map((post) => {
                            return (<>
                                <Box sx={{ width: '945px', display: 'flex', margin: 'auto' }} key={post?._id}>
                                    <Grid sx={{ width: '50%', height: '699px', display: 'flex', flexDirection: 'column', background: theme.lighterPink }}>
                                        <Card sx={{ height: 651, width: '100%' }} >
                                            {post?.type === 'video' ?
                                                <CardMedia component="video" src={post?.media} autoPlay controls sx={{ height: '100%', objectFit: 'cover' }} /> :
                                                <CardMedia component="img" src={post?.media} alt='feed_image' sx={{ height: '100%', objectFit: 'cover' }} />}
                                        </Card>
                                        <Box sx={{ height: '48px', display: 'flex' }}>
                                            <Box sx={{ width: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Box component="img" sx={{ width: 22.7, height: 19.75, cursor: 'pointer' }}
                                                    onClick={() => setLiked(!liked)}
                                                    src={liked ? like : unlike} alt='feed_image'></Box>
                                                <FeedText>146</FeedText>
                                            </Box>
                                            <Box sx={{ width: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Box component="img" sx={{ height: 19.5, width: 19.5, cursor: 'pointer' }}
                                                    onClick={() => setCommentModel({ model: true, data: post })}
                                                    src={comment} alt='feed_image'></Box>
                                                <FeedText>{post?.comments?.length}</FeedText>
                                            </Box>
                                            <Box sx={{ width: '33.3%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Box component="img" sx={{ height: 26, width: 26, cursor: 'pointer' }}
                                                    onClick={() => setTagModel({ model: true, data: post?.tagPeople })}
                                                    src={tagged} alt='feed_image'></Box>
                                                <FeedText>{post?.tagPeople?.length}</FeedText>
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
                                                    <Typography sx={{ fontWeight: "400", fontSize: "24px", lineHeight: "36px", cursor: 'pointer' }}
                                                        onClick={() => navigate('/creator')}>
                                                        Anjali Verma
                                                    </Typography>
                                                    <Box className="unfollow_button_feed">Follow</Box>
                                                </Grid>
                                                <TimeSection>7h ago</TimeSection>
                                            </Box>
                                        </Box>
                                        <Typography className='feed_text'>{post?.description}</Typography>
                                        <BoldHeading>Tagged Products</BoldHeading>
                                        <Box sx={{ height: '370px', marginTop: '12px', overflowY: post?.tagProduct?.length > 4 ? 'scroll' : '' }}>
                                            {post?.tagProduct?.map((tag) => <Box className='tag_container' key={tag?._id}>
                                                <Box component={'img'} src={user} />
                                                <Box component={'div'}>
                                                    <BolderText>{tag?.name}</BolderText>
                                                    <TagPrize>₹ 2,599.00</TagPrize>
                                                    <Typography className='tag_link' onClick={() => navigate('/dashboard')}>View Details</Typography>
                                                </Box>
                                            </Box>)}
                                        </Box>
                                    </Grid>
                                </Box>
                                <Divider sx={{ width: '1340px', margin: '36px 0px', border: '2px solid rgba(238, 187, 204, 0.7)' }} />
                            </>)
                        })}
                    </InfiniteScroll>
                </Grid >
                <TagPeople data={isTagModel} handleClose={() => setTagModel({ model: false, data: null })} />
                <CommentDialog data={isCommentModel} handleClose={() => (setCommentModel({ model: false, data: null }), postsList(posts, setPosts, 'comment'))}
                />
            </Box >
        </>
    )
}
export default Layout(Feed)