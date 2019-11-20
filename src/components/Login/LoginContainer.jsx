import React from 'react';
import css from './Login.module.css';
import {Redirect} from "react-router-dom";
import copyToClipboard from 'copy-to-clipboard';
import LoginForm from "./LoginForm";
import {getAuthUserIsAuthS} from "../../BLL/AuthSelectors";
import {connect} from "react-redux";
import {logInThunkCreator, logOutThunkCreator} from "../../BLL/AuthReducer";

const Login = props => {
    const onSubmit = formData => {
        props.isAuth
            ? props.logOutThunkCreator()
            : props.logInThunkCreator(formData.Email, formData.Password, formData.Remember, props.isAuth);
    };

    if (props.isAuth) return <Redirect to={`/todolists`}/>;
    else return (
        <div className={css.Login}>
            <h1>Login</h1>
            <div className={css.textAboutClipboard}>
                <div>If you will click on the red field</div>
                text will be copy to Clipboard
            </div>
            <div>
                <h3>Login:
                    <text onClick={() => copyToClipboard('test@gmail.com')}
                          className={css.LoginPassword}>test@gmail.com
                    </text>
                </h3>
                <h3>Password:
                    <text onClick={() => copyToClipboard('test')} className={css.LoginPassword}>test</text>
                </h3>
            </div>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
};
const mapStateToProps = state => ({isAuth: getAuthUserIsAuthS(state)});
export default connect(mapStateToProps, {logInThunkCreator, logOutThunkCreator})(Login);