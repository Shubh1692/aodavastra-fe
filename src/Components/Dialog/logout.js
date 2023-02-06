import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Logout = ({ open, handleClose }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token')
        toast.success('Logged out successfully!')
        setTimeout(() => {
            navigate('/login')
        }, 2000)
    }
    return (
        <Dialog maxWidth={'lg'}
            open={open}
            keepMounted
            onClose={handleClose}
            sx={{ padding: '40px' }}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{ fontSize: '32px' }}>Logged out</DialogTitle>
            <DialogContent sx={{ padding: '30px' }}>
                <DialogContentText id="alert-dialog-description" sx={{ fontSize: '20px' }}>Do you want to logout ?</DialogContentText>
            </DialogContent>
            <DialogActions sx={{ padding: '20px' }}>
                <Button variant='contained' onClick={handleClose}>Cancel</Button>
                <Button variant='contained' onClick={() => handleLogout()} autoFocus>Yes</Button>
            </DialogActions>
        </Dialog>

    )
}