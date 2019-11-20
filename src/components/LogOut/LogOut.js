import React from 'react';
import css from './LogOut.module.css';
import {NavLink, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {logOutThunkCreator} from "../../BLL/AuthReducer";
import {getAuthUserIsAuthS, getAuthUserLoginS} from "../../BLL/AuthSelectors";
// import manWithBeard from "../../Files/Images/manBeard.jpg";

const LogOut = (props) => {
    const LOGOUT = <NavLink to={``}  onClick={props.logOutThunkCreator}>Log out</NavLink>;
    return (
        <div className={css.textLogin}>
            {props.isAuth
                ?
                <span>{props.login}<span>{LOGOUT}</span></span>
                : <div/>}
        </div>
    );
};

let mapStateToProps = state => ({
    isAuth: getAuthUserIsAuthS(state),
    login: getAuthUserLoginS(state),
});
export default connect(mapStateToProps, {logOutThunkCreator})(LogOut);