import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, getSpecialPost } from '../../redux/SpecificPost-reducer';
import { useParams } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import s from './SpecificPost.module'
import Comments from './Comments';

const SpecificPost = () => {
    const dispatch = useDispatch();

    const post = useSelector(state => state.SpecificPostPage.post);
    const comments = useSelector(state => state.SpecificPostPage.comments);
    const isFetching = useSelector(state => state.SpecificPostPage.isFetching);

    let { postId } = useParams();

    useEffect(() => {
        dispatch(getSpecialPost(postId));
        dispatch(getComments(postId));
    }, [postId]);

    let commentsElements = comments.map(c =>
        <Comments
            comments={c}
            key={c.id}
        />)

    return <div>
        {isFetching ?
            <div className={s.fetchingImage}>
                <Preloader />
            </div> : null}
        <div>
            <Postik post={post} />
        </div>
        <hr></hr>
        <div>
            {commentsElements}
        </div>
    </div >
};


export const Postik = (props) => {
    let p = props.post;

    return <div>

        <div>
            <div><b>{p.UserId}.</b>
                <span>{p.id}</span>
                <div>{p.title}</div>
            </div>
            <div><b>Information:</b> {p.body}.</div>
        </div>
    </div>
}


export default SpecificPost;