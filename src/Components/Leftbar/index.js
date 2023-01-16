import React, { useState } from 'react';
import { List, ListItem } from '@mui/material';
import { SidebarData } from './sideMenus';
import { Link, NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import './index.scss'
import { borderLeft, borderRight } from '@mui/system';
import theme from '../../Assets/Styles/theme';

export const LeftNavbar = () => {
    const [sidebar] = useState(true)
    return (
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <List className='nav-menu-items' sx={{
                mr: '11px', pr: '69px',
                height: '376px', borderRight: `2px solid ${theme.lightBlack}`
            }}>
                {SidebarData?.map((tab, index) => {
                    return (
                        <ListItem key={index} className={tab.cName}>
                            <NavLink to={tab.path}>{tab.title}</NavLink>
                        </ListItem>
                    )
                })}
            </List>
        </nav>
    )
}
