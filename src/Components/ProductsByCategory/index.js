import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import theme from '../../Assets/Styles/theme';
import { ProductContainer } from '../../Utils/Common/component';
import { BolderHeading, BoldText, LightText } from '../../Utils/Common/styledComponent';
import Layout from '../Layout';
import './index.scss';

const ProductByCategory = () => {
    return (
        <>
            <Box sx={{ marginTop: '8pc', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Box sx={{ width: '1303px', display: 'flex', justifyContent: 'space-between' }}>
                    <Box className='fillters'>
                        <BolderHeading className='fillters_heading'>Apply Filters</BolderHeading>
                        {/* category */}
                        <Box sx={{ width: '112px', border: ` 1px solid ${theme.lightBlack}`, margin: '8px 0px' }} />
                        <Box className='fillters_sub_category'><BoldText>Categories</BoldText></Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {['Sarees', 'Suits', 'Lehenga', 'Anarkali', 'Fusion Wear', 'Designer Shawls']?.map((category) =>
                                <FormControlLabel name='isDefault' key={category}
                                    control={<Checkbox sx={{
                                        padding: '4px 6px',
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 25.34,
                                            color: '#3c3c3c'
                                        }
                                    }}
                                    />} label={<LightText >{category}</LightText>} />
                            )}
                        </Box>
                        {/* size */}
                        <Box sx={{ width: '112px', border: ` 1px solid ${theme.lightBlack}`, margin: '8px 0px' }} />
                        <Box className='fillters_sub_category'><BoldText>Size</BoldText></Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {['XL', 'S', 'M', 'L', 'XL', 'XXL']?.map((category) =>
                                <FormControlLabel name='isDefault' key={category}
                                    control={<Checkbox sx={{
                                        padding: '4px 6px',
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 25.34,
                                            color: '#3c3c3c'
                                        }
                                    }}
                                    />} label={<LightText >{category}</LightText>} />
                            )}
                        </Box>
                        {/* Designers */}
                        <Box sx={{ width: '112px', border: ` 1px solid ${theme.lightBlack}`, margin: '8px 0px' }} />
                        <Box className='fillters_sub_category'><BoldText>Designers</BoldText></Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {['Arabella', 'Bootique', 'Drapes by Rashmi', 'Modavastra', 'NA', 'Sarbear']?.map((category) =>
                                <FormControlLabel name='isDefault' key={category}
                                    control={<Checkbox sx={{
                                        padding: '4px 6px',
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 25.34,
                                            color: '#3c3c3c'
                                        }
                                    }}
                                    />} label={<LightText >{category}</LightText>} />
                            )}
                        </Box>
                    </Box>
                    <Box sx={{ width: '976px', display: 'flex', flexWrap: 'wrap' }}>
                        <ProductContainer /><ProductContainer /><ProductContainer /><ProductContainer />
                        <ProductContainer /><ProductContainer /><ProductContainer /><ProductContainer />
                        <ProductContainer /><ProductContainer /><ProductContainer />
                        <ProductContainer />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Layout(ProductByCategory);