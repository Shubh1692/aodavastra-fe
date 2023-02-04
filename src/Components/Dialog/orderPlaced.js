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
import ordered from '../../Assets/Images/order_placed.svg';
import google_play from '../../Assets/Images/google_play.svg'
import './index.scss';
import { DialogHeading, LightText } from '../../Utils/Common/styledComponent';

export const OrderPlaced = ({ open, handleClose }) => {
    return (
        <Dialog maxWidth={'lg'}
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle className='creator_title'>
                <Box sx={{ padding: '18px 0px 8px', borderBottom: `1px solid ${theme.lightBlack}`, width: '100%' }}>
                    <Box sx={{ textAlign: 'center', width: '100%'  }}>
                        <DialogHeading>Order Placed Successfully</DialogHeading>
                    </Box>
                    <IconButton sx={{ position: 'absolute', left: '91%', top: '6%' }} onClick={handleClose}>
                        <CloseIcon sx={{ fontSize: '37px', color: 'black' }} className='close_icon' />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <DialogContentText sx={{textAlign:'center'}} className='email_dialog_text'>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box component="img" sx={{ width: 152, height: 152 }} src={ordered} alt='google_play' />
                    </Box>
                    <Box className='' sx={{ width: '464px', marginTop: '40px', textAlign: 'center' }}>
                        <LightText>You’ll receive a confirmation email shortly with expected delivery date.</LightText>
                    </Box>
                    <Grid className='resend_button'><Typography variant='span'>Review Your Order</Typography></Grid>
                    <Button variant='contained' sx={{textTransform:'capitalize'}} className='login_button_dialog'><Typography variant='span'>Continue Shopping</Typography></Button>
                </DialogContentText>
            </DialogContent >
        </Dialog>

    )
}
