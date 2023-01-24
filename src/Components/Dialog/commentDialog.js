import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, OutlinedInput, Typography } from '@mui/material';
import theme from '../../Assets/Styles/theme';
import { Box } from '@mui/system';
import CloseIcon from "@mui/icons-material/Close";
import user from '../../Assets/Images/jwel_main.png';
import add_comment from '../../Assets/Images/add_comment.svg'
import './index.scss';
import { BolderText, CommentMessage } from '../../Utils/Common/styledComponent';

export const CommentDialog = ({ open, handleClose }) => {
    return (
        <Dialog maxWidth={'lg'}
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle className='creator_title'>
                <Box sx={{ paddingBottom: '8px', borderBottom: `1px solid ${theme.lightBlack}`, width: '100%' }}>
                    <Box sx={{ textAlign: 'center', width: '100%' }}>Comments</Box>
                    <IconButton sx={{ position: 'absolute', left: '91%', top: '6%' }} onClick={handleClose}>
                        <CloseIcon sx={{ fontSize: '37px', color: 'black' }} className='close_icon' />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent sx={{ padding: '24px 27px 41px 27px' }}>
                <DialogContentText sx={{ width: '464px', padding: '24px 235px' }}>
                    <Box sx={{ height: '300px', overflowY: 'scroll' }}>
                        <Box className='comment_conatiner'>
                            <Box component={'img'} src={user} sx={{ borderRadius: '50px' }} />
                            <Box component={'div'}>
                                <BolderText>Sonali</BolderText>
                                <CommentMessage>In a world where you can be a </CommentMessage>
                            </Box>
                        </Box>
                        <Box className='comment_conatiner'>
                            <Box component={'img'} src={user} sx={{ borderRadius: '50px' }} />
                            <Box component={'div'}>
                                <BolderText>Sonali</BolderText>
                                <CommentMessage>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec risus varius, dictum velit nec, sollicitudin leo. Morbi vel interdum erat. Sed suscipit ex libero, vel sodales justo faucibus vitae. Phasellus nec porttitor orci, at molestie augue. Mauris rutrum ac massa quis faucibus. In sollicitudin leo vitae urna auctor blandit.</CommentMessage>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='comment_conatiner_field'>
                        <Box className='comment_child_div'>
                            <Box component={'img'} className='user_img' src={user} sx={{ borderRadius: '50px' }} />
                            <OutlinedInput placeholder="Comment here..." size={'small'}
                                name="name" sx={{ borderRadius: '20.6px', border: `1.2px solid #C5AFDA ` }}
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
                            <Box component={'img'} src={add_comment} sx={{
                                width: '32.74px', marginLeft:'9px',
                                height: '33.96px', borderRadius: '50px'
                            }} />
                        </Box>
                    </Box>
                </DialogContentText>

            </DialogContent >

            <DialogActions>
            </DialogActions>
        </Dialog>

    )
}
