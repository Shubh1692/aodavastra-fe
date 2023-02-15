import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress, IconButton, OutlinedInput } from '@mui/material';
import theme from '../../Assets/Styles/theme';
import { Box } from '@mui/system';
import CloseIcon from "@mui/icons-material/Close";
import user from '../../Assets/Images/seller_1.svg';
import add_comment from '../../Assets/Images/add_comment.svg'
import './index.scss';
import { BolderText, CommentMessage, DialogHeading } from '../../Utils/Common/styledComponent';
import { PostService } from '../../Services';
import { toast } from 'react-toastify';

export const CommentDialog = ({ data, handleClose }) => {
    console.log('==============>', data)
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);

    const addComment = async () => {
        if (comment !== '') {
            setLoading(true)
            const payload = {
                postId: data?.data?._id,
                comment
            }
            const result = await PostService.addComment(payload)
            if (result.status < 400) {
                toast.success('Comment added successfully!')
                handleClose();
                setComment('')
                setLoading(false)
            }
        } else {
            toast.error('Add comment')
        }
    }
    return (
        <Dialog maxWidth={'lg'}
            open={data?.model}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle className='creator_title'>
                <Box sx={{ padding: '0px 0px 8px', borderBottom: `1px solid ${theme.lightBlack}`, width: '100%', display: 'flex' }}>
                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <DialogHeading>Comments</DialogHeading>
                    </Box>
                    <IconButton onClick={handleClose}>
                        <CloseIcon sx={{ fontSize: '37px', color: 'black' }} className='close_icon' />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent sx={{ padding: '24px 27px 41px 27px' }}>
                <Box sx={{ width: '464px', padding: '24px 235px' }}>
                    <Box> {/*  sx={{ height: '300px' ,overflowY: 'scroll' }}*/}
                        {data?.data?.comments?.map((comm) => <Box className='comment_conatiner' key={comm?._id}>
                            <Box component={'img'} src={user} sx={{ borderRadius: '50px' }} />
                            <Box component={'div'}>
                                <BolderText>Sonali</BolderText>
                                <CommentMessage>{comm?.comment} </CommentMessage>
                            </Box>
                        </Box>)}

                    </Box>
                    <Box className='comment_conatiner_field'>
                        <Box className='comment_child_div'>
                            <Box component={'img'} className='user_img' src={user} sx={{ borderRadius: '50px' }} />
                            <OutlinedInput placeholder="Comment here..." size={'small'}
                                onChange={(e) => setComment(e.target.value)}
                                value={comment}
                                name="comment" sx={{ borderRadius: '20.6px', border: `1.2px solid #C5AFDA ` }}
                                inputProps={{
                                    sx: {
                                        width: '320px',
                                        borderRadius: '20.6px',
                                        height: 26.4,
                                        "&::placeholder": {
                                            color: theme.lightGray,
                                            fontSize: "15.4px",
                                        },
                                    },
                                }} />
                            <Box sx={{
                                width: '32.74px', marginLeft: '9px',
                                height: '33.96px', borderRadius: '50px', cursor: 'pointer'
                            }} onClick={() => addComment()} >
                                {loading ? <CircularProgress /> :
                                    <Box component={'img'} sx={{ width: '100%', height: '100%' }} src={add_comment} />}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </DialogContent >
        </Dialog>

    )
}
