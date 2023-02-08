import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Typography } from '@mui/material';
import theme from '../../Assets/Styles/theme';
import { Box } from '@mui/system';
import CloseIcon from "@mui/icons-material/Close";
import user from '../../Assets/Images/seller_1.svg';
import '../Feed/index.scss';
import './index.scss';
import { BolderText, DialogHeading, TagPrize } from '../../Utils/Common/styledComponent';

const TagPeople = ({ open, handleClose }) => {
    return (
        <Dialog maxWidth={'lg'}
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle className='creator_title'>
                <Box sx={{ padding: '18px 0px 8px', borderBottom: `1px solid ${theme.lightBlack}`, width: '100%' }}>
                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <DialogHeading>Tagged People</DialogHeading>
                    </Box>
                    <IconButton sx={{ position: 'absolute', left: '91%', top: '5%' }} onClick={handleClose}>
                        <CloseIcon sx={{ fontSize: '37px', color: 'black' }} className='close_icon' />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent sx={{ padding: '24px 27px 41px 27px' }}>
                <DialogContentText sx={{ width: '464px', padding: '24px 235px' }}>
                    <Box sx={{ height: '426px' }}>
                        <Box className='tag_container' sx={{ width: '427px !important' }}>
                            <Box component={'img'} src={user} sx={{ borderRadius: '50px !important' }} />
                            <Box component={'div'}>
                                <Box component={'span'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <BolderText>Sonali</BolderText>
                                    <Box className='dialog_follow_button'>Unfollow</Box>
                                </Box>
                                <TagPrize>In a world where you can be a </TagPrize>
                            </Box>
                        </Box>
                    </Box>
                </DialogContentText>

            </DialogContent >

            <DialogActions>
            </DialogActions>
        </Dialog>

    )
}
export default TagPeople;