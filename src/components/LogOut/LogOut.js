import React from 'react';
import css from './LogOut.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {logOutThunkCreator} from "../../BLL/AuthReducer";
import {getAuthUserIsAuthS, getAuthUserLoginS} from "../../BLL/AuthSelectors";

const LogOut = (props) => {
    return (
        <div className={css.textLogin}>
            {props.isAuth
                ? <span>
                    {props.login}
                    <span>
                        <NavLink to={``} onClick={props.logOutThunkCreator}>Log out</NavLink>
                    </span>
                   </span>
                : <div/>}
        </div>
    );
};

let mapStateToProps = state => ({isAuth: getAuthUserIsAuthS(state), login: getAuthUserLoginS(state)});
export default connect(mapStateToProps, {logOutThunkCreator})(LogOut);