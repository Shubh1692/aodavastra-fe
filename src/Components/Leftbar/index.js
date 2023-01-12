import React, { useState } from 'react';
import { List, ListItem } from '@mui/material';
import { SidebarData } from './sideMenus';
import { Link, NavLink } from 'react-router-dom';
import './index.scss'

export const LeftNavbar = () => {
    const [sidebar] = useState(true)
    return (
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <List className='nav-menu-items'>
                {SidebarData?.map((tab,index)=>{
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
