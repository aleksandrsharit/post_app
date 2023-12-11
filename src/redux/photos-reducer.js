import { photosAPI } from "../api/api";

const SET_PHOTOS = 'SET_PHOTOS';
const SET_ALBUMS = 'SET_ALBUMS';
const SET_TODOS = 'SET_TODOS';
const SET_IS_FETCHING = 'SET_IS_FETCHING ';


let initialState = {
    albums: [],
    todos: [],
    photos: [],
    isFetching: false,
}

const PhotosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS: {
            return { ...state, photos: action.photos }
        }
        case SET_ALBUMS: {
            return { ...state, albums: action.albums }
        }
        case SET_TODOS: {
            return { ...state, todos: action.todos }
        }
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}

export const setPhotosAC = (photos) => ({ type: SET_PHOTOS, photos });
export const setAlbumsAC = (albums) => ({ type: SET_ALBUMS, albums });
export const setTodosAC = (todos) => ({ type: SET_TODOS, todos });
export const toggleIsFetchingAC = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });



export const getPhotos = () => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    const response = await photosAPI.getPhotos();
    dispatch(toggleIsFetchingAC(false));
    dispatch(setPhotosAC(response.data));
}

export const getAlbums = () => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    const response = await photosAPI.getAlbums();
    dispatch(toggleIsFetchingAC(false));
    dispatch(setAlbumsAC(response.data));
}

export const getTodos = () => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    const response = await photosAPI.getTodos();
    dispatch(toggleIsFetchingAC(false));
    dispatch(setTodosAC(response.data));
}

export default PhotosReducer; 