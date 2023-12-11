import { postsAPI } from "../api/api";

const SET_COMMENTS = 'SET_COMMENTS';
const SET_IS_FETCHING = 'SET_IS_FETCHING ';
const SET_POST = 'SET_POST ';

let initialState = {
    comments: [],
    post: {},
    isFetching: false
}

const SpecificPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS: {
            return { ...state, comments: action.comments }
        }
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_POST: {
            return { ...state, post: action.post }
        }
        default:
            return state;
    }
}

export const setCommentsAC = (comments, commentsId) => ({ type: SET_COMMENTS, comments, commentsId });
export const toggleIsFetchingAC = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const setPostAC = (post, postId) => ({ type: SET_POST, post, postId });


export const getComments = (commentsId) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    const response = await postsAPI.getPostComments(commentsId);
    dispatch(toggleIsFetchingAC(false));
    dispatch(setCommentsAC(response.data));
}

export const getSpecialPost = (postId) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    const response = await postsAPI.getPost(postId > 100 ? postId = 1 : postId);
    dispatch(toggleIsFetchingAC(false));
    dispatch(setPostAC(response.data));
}

export default SpecificPostReducer; 