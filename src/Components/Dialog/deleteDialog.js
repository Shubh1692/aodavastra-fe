import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, DialogActions, Grid, IconButton, Typography } from '@mui/material';
import theme from '../../Assets/Styles/theme';
import { Box } from '@mui/system';
import CloseIcon from "@mui/icons-material/Close";
import './index.scss';
import { DialogHeading } from '../../Utils/Common/styledComponent';

export const DeleteDialog = ({ open, handleClose, handleDelete }) => {
    return (
        <Dialog maxWidth={'lg'}
            open={open}
            keepMounted
            sx={{ padding: '20px' }}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle >
                <Box sx={{ borderBottom: `1px solid ${theme.lightBlack}`, width: '700px' }}>
                    <Box sx={{ width: '100%' }}>
                        <DialogHeading> Delete Confirmation</DialogHeading>
                    </Box>
                    <IconButton sx={{ position: 'absolute', left: '91%', top: '6%' }} onClick={handleClose}>
                        <CloseIcon sx={{ fontSize: '37px', color: 'black' }} className='close_icon' />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent sx={{ height: '100px' }}>
                <Typography sx={{fontSize:'22px'}}>Are you sure want to delete ?</Typography>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' onClick={handleClose}>Cancel</Button>
                <Button variant='contained' onClick={() => handleDelete()} autoFocus>Yes</Button>
            </DialogActions>
        </Dialog>
    )
}
