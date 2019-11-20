import {authAPI} from "../DAL/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SN/HEADER/SET_USER_DATA';
const SET_USER_PHOTO = 'SN/HEADER/SET_USER_PHOTO';

export const setUserData = (email, userId, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {email, userId, login, isAuth}
});

export const checkUserDataThunkCreator = () => async dispatch => {
    let responseData = await authAPI.setUserDataAPI();
    if (responseData.resultCode === 0) {// if we have login (resultCode === 0) then we can make request to get setUserData
        // let {email, userId, login} = data.data;
        let email = responseData.data.email;
        let userId = responseData.data.id;
        let login = responseData.data.login;
        dispatch(setUserData(email, userId, login, true));
    }

};
export const logInThunkCreator = (email, password, rememberMe, isAuth) => async dispatch => {
    if (email === `test@gmail.com`) email = `itemka2503@gmail.com`;
    if (password === `test`) password = `Developer2503`;

    let responseData = await authAPI.login(email, password, rememberMe);
    if (responseData.resultCode === 0) dispatch(checkUserDataThunkCreator(isAuth));
    else dispatch(stopSubmit("login", {_error: responseData.messages,}));
};
export const logOutThunkCreator = () => async dispatch => {
    let responseData = await authAPI.logout();
    if (responseData.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userPhoto: null,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_USER_PHOTO:
            return {
                ...state,
                userPhoto: action.userPhoto,
            };
        default: {
            return state;
        }
    }
};
export default AuthReducer;