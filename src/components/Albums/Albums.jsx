import React, { useEffect } from 'react';
import s from './Albums.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../../redux/photos-reducer';
import Album from './Album';
import Preloader from '../common/Preloader/Preloader';

const Albums = () => {
    const dispatch = useDispatch();

    const albums = useSelector(state => state.photosPage.albums);
    const isFetching = useSelector(state => state.photosPage.isFetching);


    useEffect(() => {
        dispatch(getAlbums());
    }, [getAlbums]);


    let albumsElements = albums.map(a =>
        < Album
            album={a}
            key={a.id}
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
                        {albumsElements}
                    </div>
                </div>
            )}
        </div>
    );
};


export default Albums;