import React, { useEffect, useState } from 'react';
import s from './Photos.module.css'
import { useDispatch, useSelector } from 'react-redux';
import Photo from './Photo';
import { getPhotos } from '../../redux/photos-reducer';
import Preloader from '../common/Preloader/Preloader';

const Photos = () => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photosPage.photos);
    const isFetching = useSelector(state => state.photosPage.isFetching);

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        dispatch(getPhotos());
    }, []);

    const handleImageClick = (p) => {
        setSelectedPhoto(p);
    };

    let photosElements = photos.map(p =>
        < Photo
            key={p.id}
            src={p.thumbnailUrl}
            alt={p.title}
            onClick={() => handleImageClick(p)}
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
                        {photosElements}
                    </div>
                    {selectedPhoto && (
                        <div className="image-popup">
                            <img src={selectedPhoto.url} alt={selectedPhoto.title} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Photos;