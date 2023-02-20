import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, IconButton } from '@mui/material';
import theme from '../../Assets/Styles/theme';
import { Box } from '@mui/system';
import CloseIcon from "@mui/icons-material/Close";
import user from '../../Assets/Images/seller_1.svg';
import '../feed/index.scss';
import './index.scss';
import { BolderText, DialogHeading, TagPrize } from '../../Utils/Common/styledComponent';

const TagPeople = ({ data, handleClose }) => {
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
                        <DialogHeading>Tagged People</DialogHeading>
                    </Box>
                    <IconButton onClick={handleClose}>
                        <CloseIcon sx={{ fontSize: '37px', color: 'black' }} className='close_icon' />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent sx={{ padding: '24px 27px 41px 27px' }}>
                <Box sx={{ width: '464px', padding: '24px 235px' }}>
                    {data?.data?.map((people) => <Box key={people?._id} className='tag_container_model' sx={{ width: '441px !important' }}>
                        <Box component={'img'} src={user} sx={{ borderRadius: '50px !important' }} />
                        <Box component={'div'}>
                            <Box className='tag_text'>
                                <BolderText>{people?.name}</BolderText>
                                <TagPrize>{people?.bio} </TagPrize>
                            </Box>
                            <Button variant='contained' className=''>Unfollow</Button>
                        </Box>
                    </Box>)}
                </Box>
            </DialogContent >
        </Dialog>

    )
}
export default TagPeople;