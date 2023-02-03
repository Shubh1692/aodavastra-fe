import React, { useState } from 'react';
import { List, ListItem } from '@mui/material';
import { SidebarData } from './sideMenus';
import { NavLink } from 'react-router-dom';
import theme from '../../Assets/Styles/theme';
import './index.scss';
import { Logout } from '../Dialog/logout';

export const LeftNavbar = () => {
    const [sidebar] = useState(true);
    const [logout, setLogout] = useState(false)
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
                        </ListItem>)
                })}
                <ListItem className='nav-text text-danger' onClick={() => setLogout(true)} >Log Out</ListItem>
            </List>
            <Logout open={logout} handleClose={() => setLogout(false)} />
        </nav>
    )
}
