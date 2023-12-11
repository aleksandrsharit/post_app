import React, { useEffect } from 'react';
import s from './Users.module.css'
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { getUsers } from '../../redux/users-reducer';
import User from './User';

const Users = () => {
    const dispatch = useDispatch();


    const users = useSelector(state => state.usersPage.users);
    const isFetching = useSelector(state => state.usersPage.isFetching);


    useEffect(() => {
        dispatch(getUsers());
    }, []);


    let usersElements = users.map(u =>
        < User
            user={u}
            key={u.id}
        />
        )
        debugger;

    return (
        <div>
            {isFetching ? (
                <div className={s.fetchingImage}>
                    <Preloader />
                </div>
            ) : (

                <div className={s.userClass}>
                    {usersElements}
                </div>
            )}
        </div>
    );
};


export default Users;