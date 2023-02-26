/* eslint-disable no-sequences */
import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import {
    Box,
    Button,
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
    if (active === 'pagination') {
        page = page + 1
        const result = await PostService.getAll(page, 10)
        if (result.status < 400) {
            console.log('if')
            setPosts([...posts, ...result.data.data])
        }
    } else {
        page = 1;
        const result = await PostService.getAll(page, 10)
        if (result.status < 400) {
            console.log('else')
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

    return (
        <>
            <Box className='details__container'>
                <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                    {posts.length ? <InfiniteScroll
                        dataLength={posts.length} //This is important field to render the next data
                        next={() => { postsList(posts, setPosts, 'pagination') }}
                        hasMore={true}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                        loader={<h4>Loading...</h4>}>
                        {posts?.map((post) => {
                            return (<Box key={post?._id} >
                                <Box key={post?._id} className='feed__container'>
                                    <Grid className='feed__image'>
                                        <Card sx={{ height: 651, width: '100%' }} >
                                            {post?.type === 'video' ?
                                                <CardMedia component="video" src={post?.media} controls className='feed__image_conatiner' /> :
                                                <CardMedia component="img" src={post?.media} alt='feed_image' className='feed__image_conatiner' />}
                                        </Card>
                                        <Box className='feed__actions__container'>
                                            <Box className='feed_action_section'>
                                                <Box component="img" sx={{ width: 22.7, height: 19.75 }}
                                                    onClick={() => setLiked(!liked)}
                                                    src={liked ? like : unlike} alt='feed_image'></Box>
                                                <FeedText>146</FeedText>
                                            </Box>
                                            <Box className='feed_action_section'>
                                                <Box component="img" sx={{ height: 19.5, width: 19.5 }}
                                                    onClick={() => setCommentModel({ model: true, data: post })}
                                                    src={comment} alt='feed_image'></Box>
                                                <FeedText>{post?.comments?.length}</FeedText>
                                            </Box>
                                            <Box className='feed_action_section'>
                                                <Box component="img" sx={{ height: 26, width: 26 }}
                                                    onClick={() => setTagModel({ model: true, data: post?.tagPeople })}
                                                    src={tagged} alt='feed_image'></Box>
                                                <FeedText>{post?.tagPeople?.length}</FeedText>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid className='feed__content__section'>
                                        <Box className='feed__content__container'>
                                            <Box className='feed__creators'>
                                                <Box className='creator__name_container' onClick={() => navigate('/creator')}>
                                                    <Box className='creator__profile'>
                                                        <Box component={'img'} src={user} sx={{ borderRadius: "50px" }} alt="demo_img" height={"100%"} width={'100%'} />
                                                    </Box>
                                                    <Box className='feed_name__box'>
                                                        <Grid className='feed__name__grid'>
                                                            <Typography className='feed_name__text'>Anjali Verma</Typography>
                                                        </Grid>
                                                        <TimeSection>7h ago</TimeSection>
                                                    </Box>
                                                </Box>
                                                <Button variant='contained' className="unfollow_button_feed">Follow</Button>
                                            </Box>
                                            <Typography className='feed_text'>{post?.description}</Typography>
                                            <BoldHeading>Tagged Products</BoldHeading>
                                            <Box className='feed_tagged_container'>
                                                {post?.tagProduct?.map((tag) => <Box className='tag_container' key={tag?._id}>
                                                    <Box component={'img'} src={user} />
                                                    <Box component={'div'}>
                                                        <BolderText>{tag?.name}</BolderText>
                                                        <TagPrize>₹ 2,599.00</TagPrize>
                                                        <Typography className='tag_link' onClick={() => navigate('/dashboard')}>View Details</Typography>
                                                    </Box>
                                                </Box>)}
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Box>
                                <Divider className='divider__line' />
                            </Box>)
                        })}
                    </InfiniteScroll> : <h6>No data found.</h6>}
                </Grid >
                <TagPeople data={isTagModel} handleClose={() => setTagModel({ model: false, data: null })} />
                <CommentDialog data={isCommentModel} handleClose={() => (setCommentModel({ model: false, data: null }), postsList(posts, setPosts, 'comment'))}
                />
            </Box >
        </>
    )
}
export default Layout(Feed)