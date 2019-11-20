import {applyMiddleware, combineReducers, createStore} from "redux";
import Reducer from './Reducer';
import thunkMiddleware from 'redux-thunk'
import AuthReducer from "./AuthReducer";
import {reducer as formReducer} from 'redux-form';

const store = createStore(combineReducers({
    partState: Reducer,
    authDataState: AuthReducer,
    form: formReducer,
}), applyMiddleware(thunkMiddleware));
export default store;