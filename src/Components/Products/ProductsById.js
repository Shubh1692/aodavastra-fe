import { Box, Typography, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import Layout from '../Layout';
import product1 from '../../Assets/Images/seller_1.svg';
import product2 from '../../Assets/Images/post-1.png';
import product3 from '../../Assets/Images/post-2.png';
import product4 from '../../Assets/Images/post-3.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './index.scss';
import { BoldHeading, Heading, HeadingWhite, LightText, ProductHeading, SemiDarkText } from '../../Utils/Common/styledComponent';
import theme from '../../Assets/Styles/theme';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(inches, XS, S, M, L, XL, dXL, tXL, fXL, FXL, SXL) {
    return { inches, XS, S, M, L, XL, dXL, tXL, fXL, FXL, SXL };
}
const head = ['(inches)', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL']

const rows = [
    createData('Bust', 32, 34, 36, 38, 40, 42, 44, 46, 48, 50),
    createData('Waist', 26, 28, 30, 32, 34, 36, 38, 40, 42, 44),
    createData('Hip', 36, 38, 40, 42, 44, 46, 48, 50, 52, 54),
];
const ProductsById = () => {
    const [sizeChart, setSizeChart] = useState(false);
    const [active, setActive] = useState(product1);
    const [liked, setLiked] = useState(true);
    return (
        <Box sx={{ width: '1140px', margin: '8pc auto 0px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex' }}>
                <Box className='slider_container'>
                    {[product1, product2, product3, product4]?.map((img, index) =>
                        <Box component={'img'} key={index} onClick={() => setActive(img)}
                            className={active === img ? 'active' : ''} src={img} />
                    )}
                </Box>
                <Box className='product_view'>
                    <Box className='product_view_img'>
                        <Box className='parent_product_img' component={'img'} src={active} alt='product_image' />
                        <Box className='child_product_img'>{liked ? <FavoriteIcon sx={{color:theme.orangeLighter, fontSize:'24px'}} /> : <FavoriteBorderIcon size='24' />}</Box>
                        <Box className='add_to_bag'><Heading>Add to Bag</Heading></Box>
                        <Box className='buy_now'><HeadingWhite>Buy Now</HeadingWhite></Box>
                    </Box>
                </Box>
                <Box sx={{ width: '545px' }}>
                    <Box className='product_name_div'>
                        <ProductHeading className=' '>Gorgeous Designer saree</ProductHeading>
                        <Box sx={{ width: '243px', border: `1px solid ${theme.lightBlack}`, marginBottom: '12px' }} />
                        <Box className='store_name'>
                            <Typography sx={{ color: theme.lightBlack }} variant='span'>Sold By-</Typography>
                            <Typography sx={{ color: theme.darkPurple }} variant='span'> Drapes by Rashmi</Typography>
                        </Box>
                        <Typography className='product_prize'>₹ 2,999.00</Typography>
                        <BoldHeading>Select Size</BoldHeading>
                        <Box className='size_container'>
                            <Grid item><LightText>XS</LightText></Grid>
                            <Grid item><LightText>S</LightText></Grid>
                            <Grid item><LightText>M</LightText></Grid>
                            <Grid item><LightText>L</LightText></Grid>
                            <Grid item><LightText>XL</LightText></Grid>
                            <Grid item><LightText>XXL</LightText></Grid>
                        </Box>
                        {!sizeChart && <Typography onClick={() => setSizeChart(true)} className='size_chart'>Size Chart</Typography>}
                        {sizeChart && <Box sx={{ width: '462px', border: `2px solid ${theme.lightBlack}` }}>
                            <Box sx={{
                                height: '36px', display: 'flex', border: `1px solid ${theme.lightBlack}`,
                                justifyContent: 'center', alignItems: 'center'
                            }}><SemiDarkText>Size Chart</SemiDarkText></Box>
                            <TableContainer>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {head?.map(i => <TableCell sx={{ padding: '9px !important', border: 1 }} align="right">{i}</TableCell>)}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (<TableRow key={row.name}>
                                            <TableCell sx={{ padding: '7px !important', border: 1 }} align="left">{row.inches}</TableCell>
                                            <TableCell sx={{ padding: '7px !important', border: 1 }} align="center">{row.XS}</TableCell>
                                            <TableCell sx={{ padding: '7px !important', border: 1 }} align="center">{row.S}</TableCell>
                                            <TableCell sx={{ padding: '7px !important', border: 1 }} align="center">{row.M}</TableCell>
                                            <TableCell sx={{ padding: '7px !important', border: 1 }} align="center">{row.L}</TableCell>
                                            <TableCell sx={{ padding: '7px !important', border: 1 }} align="center">{row.XL}</TableCell>
                                            <TableCell sx={{ padding: '7px !important', border: 1 }} align="center">{row.dXL}</TableCell>
                                            <TableCell sx={{ padding: '7px !important', border: 1 }} align="center">{row.tXL}</TableCell>
                                            <TableCell sx={{ padding: '7px !important', border: 1 }} align="center">{row.fXL}</TableCell>
                                            <TableCell sx={{ padding: '7px !important', border: 1 }} align="center">{row.FXL}</TableCell>
                                            <TableCell sx={{ padding: '7px !important', border: 1 }} align="center">{row.SXL}</TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>}
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '24px' }}>
                            <BoldHeading>Specifications</BoldHeading>
                            <Box sx={{ marginTop: '6px' }}><LightText>Classical Silk Saree</LightText></Box>
                            <Box sx={{ marginTop: '24px' }}><BoldHeading>Description</BoldHeading></Box>
                        </Box>
                        <Box sx={{ width: '490px', marginTop: '6px' }}>
                            <LightText>Keep the allure of traditional artistry alive and ablaze with these ornately crafted stud earrings.
                                This pair is the perfect match to your heirloom sarees.</LightText>
                        </Box>
                        <Box sx={{ marginTop: '32px', display: 'flex', width: '360px' }}>
                            <Box className='pin_code_details'>
                                <TextField sx={{ width: '100%' }} placeholder='Enter Pincode' />
                            </Box>
                            <Box className='available_details'><SemiDarkText>Check Availability</SemiDarkText></Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ margin: '36px 0px' }}>
                <BoldHeading>You may also like</BoldHeading>
                <Box sx={{ display: 'flex', marginTop: '6px' }}>
                    <Box sx={{ height: '275px', width: '200px', marginRight: '28px' }}>
                        <Box component={'img'} src={product1} sx={{ height: '240px', width:'100%', objectFit:'cover' }} />
                        <Box className='suggetion_product'><LightText>Silk Saree 99999999999</LightText></Box>
                    </Box>
                    <Box sx={{ height: '275px', width: '200px', marginRight: '28px' }}>
                        <Box component={'img'} src={product1} sx={{ height: '240px', width:'100%', objectFit:'cover' }} />
                        <Box className='suggetion_product'><LightText>Silk Saree 99999999999</LightText></Box>
                    </Box>
                    <Box sx={{ height: '275px', width: '200px', marginRight: '28px' }}>
                        <Box component={'img'} src={product1} sx={{ height: '240px', width:'100%', objectFit:'cover' }} />
                        <Box className='suggetion_product'><LightText>Silk Saree 99999999999</LightText></Box>
                    </Box>
                    <Box sx={{ height: '275px', width: '200px', marginRight: '28px' }}>
                        <Box component={'img'} src={product1} sx={{ height: '240px', width:'100%', objectFit:'cover' }} />
                        <Box className='suggetion_product'><LightText>Silk Saree 99999999999</LightText></Box>
                    </Box>
                    <Box sx={{ height: '275px', width: '200px', marginRight: '28px' }}>
                        <Box component={'img'} src={product1} sx={{ height: '240px', width:'100%', objectFit:'cover' }} />
                        <Box className='suggetion_product'><LightText>Silk Saree 99999999999</LightText></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Layout(ProductsById);