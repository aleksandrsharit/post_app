import React, { useEffect, useState } from 'react';
import s from './Posts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/posts-reducer';
import Post from './Post';
import Preloader from '../common/Preloader/Preloader';
import AddPost from './addPost/addPost';
import { Pagination } from 'antd';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postsPage.posts);
    const isFetching = useSelector(state => state.postsPage.isFetching);

    const [current, setCurrent] = useState(1);
    const postsPerPage = 10;

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const indexOfLastPost = current * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPosts = posts.length;

    return (
        <div>
            {isFetching ? (
                <div className={s.fetchingImage}>
                    <Preloader />
                </div>
            ) : (
                <div className={s.posts}>
                    <AddPost />
                    <div className={s.post}>
                        {currentPosts.map(p => (
                            <Post key={p.id} post={p} />
                        ))}
                    </div>
                    <Pagination
                        showSizeChanger={false}
                        current={current}
                        onChange={setCurrent}
                        total={totalPosts}
                        pageSize={postsPerPage}
                    />

                </div>

            )}
        </div>
    );
};

export default Posts;
