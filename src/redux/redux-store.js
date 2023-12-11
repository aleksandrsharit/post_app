import { applyMiddleware, combineReducers, createStore } from "redux";
import PostsReducer from './posts-reducer';
import thunkMiddleware from 'redux-thunk';
import SpecificPostReducer from "./SpecificPost-reducer";
import PhotosReducer from "./photos-reducer";
import UsersReducer from "./users-reducer";

let reducers = combineReducers({
    postsPage: PostsReducer,
    SpecificPostPage: SpecificPostReducer,
    photosPage: PhotosReducer,
    usersPage: UsersReducer,


})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;