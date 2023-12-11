import React from 'react';
import s from './Main.module.css'
import NavBarToGallery from '../NavBar/NavBarToGallery';


const Main = () => {
    return <div className={s.mainContainer}>
        <NavBarToGallery />
    </div>
}

export default Main;