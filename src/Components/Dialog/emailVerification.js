import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, IconButton, Typography } from '@mui/material';
import theme from '../../Assets/Styles/theme';
import { Box } from '@mui/system';
import CloseIcon from "@mui/icons-material/Close";
import email_image from '../../Assets/Images/undraw_mail_sent_re_0ofv.svg';
import google_play from '../../Assets/Images/google_play.svg'
import './index.scss';

export const EmailVerification = ({ open, handleClose }) => {
  return (
    <Dialog maxWidth={'lg'}
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className='creator_title'>
        <Box sx={{ paddingBottom: '8px', borderBottom: `1px solid ${theme.lightBlack}`, width: '100%' }}>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            Email Verification
          </Box>
          <IconButton sx={{ position: 'absolute', left: '91%', top: '6%' }} onClick={handleClose}>
            <CloseIcon sx={{ fontSize: '37px', color: 'black' }} className='close_icon' />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText className='email_dialog_text'>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="img" sx={{ width: 152, height: 135.84 }} src={email_image} alt='google_play' />
          </Box>
          <Box className='email_text_content' sx={{ width: '464px', marginTop: '40px' }}>
            <Typography variant='span' sx={{ color: theme.grayText, fontWeight: 400 ,marginLeft:'19px'}}>We have sent you a link on </Typography>
            <Typography variant='span' sx={{ color: theme.primaryColor, fontWeight: 700 }}> heena@gmail.com. </Typography>
            <Typography variant='span' sx={{ color: theme.black, fontWeight: 400, display: 'flex', justifyContent: 'center' }}> Click on the link to verify the email.</Typography>
          </Box>
          <Grid className='resend_button'><Typography variant='span'>Resend Link</Typography></Grid>
          <Grid className='login_button_dialog'><Typography variant='span'>Log In</Typography></Grid>
        </DialogContentText>
      </DialogContent >
    </Dialog>

  )
}
