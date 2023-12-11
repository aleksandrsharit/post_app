import React from 'react';
import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return <>
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/main' activeClassName={s.active} className={s.link}>Главная</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/posts' activeClassName={s.active} className={s.link}>Посты</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active} className={s.link}>Друзья</NavLink>
            </div>
            {/* <div className={s.item}>
                <NavLink to='/gallery' activeClassName={s.active} className={s.link}>Галерея</NavLink>
            </div> */}
            <div className={s.item}>
                <a>Сообщения</a>
            </div>
            <div className={s.item}>
                <a>Уведомления</a>
            </div>
        </nav>
    </>
}

export default NavBar;