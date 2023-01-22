import React from 'react';
import {
    Box, Typography
} from '@mui/material';
import checkIcon from '../../Assets/Images/check_icon.svg';
import cancel from '../../Assets/Images/cancel.svg';
import deliver from '../../Assets/Images/deliver_icon.svg';
import theme from '../../Assets/Styles/theme';
import './index.scss';

export const Delivered = () => {
    return (
        <Box className='order_status' sx={{ background: theme.lighterPrimary }}>
            <Box className='status_icon'>
                <img src={deliver} alt='check_icon' />
            </Box>
            <Typography sx={{ fontSize: '10.8px', fontWeight: 400, color: theme.primaryColor }}>Delivered</Typography>
        </Box>
    )
}

export const Ordered = () => {
    return (
        <Box className='order_status' sx={{ background: theme.lighterPrimary }}>
            <Box className='status_icon'>
                <img src={checkIcon} alt='check_icon' />
            </Box>
            <Typography sx={{ fontSize: '10.8px', fontWeight: 400, color: theme.primaryColor }}>Ordered</Typography>
        </Box>
    )
}


export const Cancelled = () => {
    return (
        <Box className='order_status' sx={{ background: theme.orangeLight }}>
            <Box className='status_icon'>
                <img src={cancel} alt='check_icon' />
            </Box>
            <Typography sx={{ fontSize: '10.8px', fontWeight: 400, color: theme.orangeDark }}>Cancelled</Typography>
        </Box>
    )
}