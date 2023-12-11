import React from 'react';
import s from './Post.module.css'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import EditPost from './editPost/editPost.jsx';


const Post = (props) => {

    let p = props.post;


    return <div className={s.postContainer}>
        <NavLink to={'/posts/' + p.id} className={s.postLinkInfo} >
            <div className={s.postContainerChild}>
                <div className={s.imageTitle}>
                    <img src='/picture/vk1.jpg' />
                </div>
                <div className={s.postTitle}>
                    <div className={s.titleChild}>
                        {p.title}
                    </div>
                    <div className={s.timeDate}>
                        <Paginator />
                    </div>
                </div>
            </div>
        </NavLink>
        <div className={s.postBody}>
            <EditPost body={p.body} id={p.id} />
        </div>
    </div>
}

export default Post;


