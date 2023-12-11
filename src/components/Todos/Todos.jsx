import React, { useEffect } from 'react';
import s from './Todos.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../redux/photos-reducer';
import Preloader from '../common/Preloader/Preloader';
import Todo from './Todo';

const Todos = () => {
    const dispatch = useDispatch();

    const todos = useSelector(state => state.photosPage.todos);
    const isFetching = useSelector(state => state.photosPage.isFetching);


    useEffect(() => {
        dispatch(getTodos());
    }, [getTodos]);


    let todosElements = todos.map(t =>
        < Todo
            todos={t}
            key={t.id}
        />)


    return (
        <div>
            {isFetching ? (
                <div className={s.fetchingImage}>
                    <Preloader />
                </div>
            ) : (
                <div className={s.posts}>
                    <div className={s.post}>
                        {todosElements}
                    </div>
                </div>
            )}
        </div>
    );
};


export default Todos;