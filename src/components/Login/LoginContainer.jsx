import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {logInThunkCreator, logOutThunkCreator} from "./../../BLL/AuthReducer";
import {getAuthUserIsAuthS} from "./../../BLL/AuthSelectors";

class LoginContainer extends React.Component {

    render() {
        return <Login {...this.props}/>
    }
}

const mapStateToProps = state => ({isAuth: getAuthUserIsAuthS(state)});
export default connect(mapStateToProps, {logInThunkCreator, logOutThunkCreator})(LoginContainer);