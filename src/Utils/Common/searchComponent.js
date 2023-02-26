import React from 'react'
import { Box, Typography, Divider } from '@mui/material';
import Layout from '../../Components/Layout';
import user from '../../Assets/Images/post-1.png';
import design1 from '../../Assets/Images/design1.svg';
import design2 from '../../Assets/Images/design2.svg';
import design3 from '../../Assets/Images/design3.svg';
import design4 from '../../Assets/Images/design4.svg';
import design5 from '../../Assets/Images/design5.svg';
import design6 from '../../Assets/Images/design6.svg';
import post1 from '../../Assets/Images/post-1.png';
import './index.scss';

const SearchComponent = () => {

    return (
        <Box className='details__container'>
            <Box className='search_container_div'>
                <Typography className='search_title'>Users</Typography>
                <Box className='users_container'>
                    {[1, 2, 3, 4, 5]?.map((i) => <Box className='user_section' key={i}>
                        <Box component={'img'} src={user} alt={'user'} />
                        <Typography className='user_name'>Anjali Verma</Typography>
                    </Box>)}
                </Box>
                <Divider className='divider_box' />
                <Typography className='search_title' sx={{ margin: '22px 0px 12px' }}>Top Brands</Typography>
                <Box className='brand_container'>
                    <Box className='brand_box' component={'img'} src={design6} alt='designer_img' />
                    <Box className='brand_box' component={'img'} src={design5} alt='designer_img' />
                    <Box className='brand_box' component={'img'} src={design4} alt='designer_img' />
                    <Box className='brand_box' component={'img'} src={design3} alt='designer_img' />
                    <Box className='brand_box' component={'img'} src={design2} alt='designer_img' />
                    <Box className='brand_box' component={'img'} src={design1} alt='designer_img' />
                    <Box className='brand_box' component={'img'} src={design6} alt='designer_img' />
                    <Box className='brand_box' component={'img'} src={design5} alt='designer_img' />
                </Box>
                <Divider className='divider_box' sx={{marginTop: '36.48px'}} />
                <Typography className='search_title' sx={{ margin: '22px 0px 12px' }}>Top Products</Typography>
                <Box className='search_product_div'>
                    {[1, 2, 3]?.map((i) => <Box className='search_product' key={i}>
                        <Box className='search_product_img' component={'img'} src={post1} alt='designer_img' />
                        <Box className='search_product_content'>
                            <Typography className='text-gray search_product_name'>Net Multi Women saree</Typography>
                            <Typography className='text-gray search_product_prize'>₹ 3,099.00</Typography>
                        </Box>
                    </Box>)}
                </Box>
                <Divider className='divider_box' sx={{ marginTop: '59px' }} />
                <Typography className='search_title' sx={{ margin: '22px 0px 12px' }}>Categories</Typography>
                <Box className='search_category_div'>
                    {['Saree', 'Tops', 'T-Shirts', 'Jumpsuits']?.map((i) => <Box className='search_category' key={i}>
                        <Typography className='search_category_name'>{i}</Typography>
                    </Box>)}
                </Box>
            </Box>
        </Box>
    )
}
export default Layout(SearchComponent);