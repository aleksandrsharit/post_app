import React, { useState } from 'react';
import s from './NavBarToGallery.module.css'
import { NavLink, Outlet } from 'react-router-dom';
import Photos from '../Photos/Photos';
import Albums from '../Albums/Albums';
import Todos from '../Todos/Todos';


const NavBarToGallery = () => {
    const [selectedTab, setSelectedTab] = useState('photos');

    const handleClick = (event, link) => {
        event.preventDefault();
        setSelectedTab(link);
    };

    return <>
        <nav className={s.navGallery}>
            <span className={s.nav}>
                <NavLink
                    to='/photos'
                    activeClassName={s.active}
                    className={s.linkGallery}
                    onClick={(event) => handleClick(event, 'photos')}>
                    Фотографии
                </NavLink>
            </span>
            <span className={s.nav}>
                <NavLink
                    to='/gallery'
                    ctiveClassName={s.active}
                    className={s.linkGallery}
                    onClick={(event) => handleClick(event, 'gallery')}>
                    Альбомы
                </NavLink>
            </span>
            <span className={s.nav}>
                <NavLink
                    to='/todos'
                    activeClassName={s.active}
                    className={s.linkGallery}
                    onClick={(event) => handleClick(event, 'todos')}>
                    Дела
                </NavLink>
            </span>
        </nav>
        {selectedTab === 'photos' && <div><Photos /></div>}
        {selectedTab === 'gallery' && <div><Albums /></div>}
        {selectedTab === 'todos' && <div><Todos /></div>}
    </>
}

export default NavBarToGallery;