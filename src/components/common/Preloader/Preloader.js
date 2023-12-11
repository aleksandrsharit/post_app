import React from 'react';
import preloader from './../../../assets/images/Preloader.gif';
import s from './Preloader.module.css';

const Preloader = () => {
    return <div className={s.preloaderCss}>
        <img src={preloader} />
    </div>
}


export default Preloader;