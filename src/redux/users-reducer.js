import { usersAPI } from "../api/api";

const GET_USERS = 'GET_USERS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    users: [],
    isFetching: false
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}

export const setUsersAC = (users) => ({ type: GET_USERS, users });
export const toggleIsFetchingAC = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });


export const getUsers = () => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    const response = await usersAPI.getUsers();
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(response.data));
}

export default UsersReducer; 