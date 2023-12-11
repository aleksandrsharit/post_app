import { postsAPI } from "../api/api";

const SET_POSTS = 'SET_POSTS';
const SET_IS_FETCHING = 'SET_IS_FETCHING ';
const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';


let initialState = {
    posts: [],
    isFetching: false,
}

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return { ...state, posts: action.posts }
        }
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case ADD_POST: {
            const post = action.post;
            return {
                ...state,
                posts: [...state.posts, post],
            };
        }
        case EDIT_POST: {
            const postId = action.postId;
            const newPost = action.newPost;

            const updatedPosts = state.posts.map(post => {
                if (post.id === postId) {
                    return { ...post, body: newPost };
                } else {
                    return post;
                }
            });
            return { ...state, posts: updatedPosts };
        }
        case DELETE_POST: {
            const postId = action.postId;
            const updatedPosts = state.posts.filter(post => post.id !== postId);

            return { ...state, posts: updatedPosts };
        }
        default:
            return state;
    }
}

export const setPostsAC = (posts) => ({ type: SET_POSTS, posts });
export const toggleIsFetchingAC = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const addPostAC = (post) => ({ type: ADD_POST, post });
export const editPostAC = (newPost, postId) => ({ type: EDIT_POST, newPost, postId });
export const deletePostAC = (postId) => ({ type: DELETE_POST, postId });


export const getPosts = () => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    const response = await postsAPI.getPosts();
    dispatch(toggleIsFetchingAC(false));
    debugger;
    dispatch(setPostsAC(response.data));
}

export const addPost = (post) => async (dispatch) => {
    const response = await postsAPI.addPost(post);
    dispatch(addPostAC(response.data));
}

export const editPost = (newPost, postId) => async (dispatch) => {
    if (postId > 100) {
        dispatch(editPostAC(newPost, postId));
    } else {
        const response = await postsAPI.editPost(postId);
        dispatch(editPostAC(newPost, response.data.id));
    }
}

export const deletePost = (postId) => async (dispatch) => {
    const response = await postsAPI.deletePost(postId);
    if (response.status === 200) {
        dispatch(deletePostAC(postId));
    }
}



export default PostsReducer; 