import React from 'react';
import s from './Photo.module.css'


const Photo = (props) => {
    return <div className={s.postContainer}>
        <img src={props.url} alt={props.title} />
        </div>
}

export default Photo;