import {applyMiddleware, createStore} from "redux";
import Reducer from './Reducer';
import thunkMiddleware from 'redux-thunk'

const store = createStore(Reducer, applyMiddleware(thunkMiddleware));
export default store;