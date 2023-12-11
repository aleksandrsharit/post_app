import React from 'react';
import s from './Album.module.css'


const Album = (props) => {
    const a = props.album;

    return <div className={s.postContainer}>
        <div>
            {a.id}
        </div>
        <div>
            {a.title}
        </div>
    </div>
}

export default Album;