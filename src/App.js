import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import {getAuthUserIsAuthS} from "./BLL/AuthSelectors";
import TodoListPage from "./components/TodoList/TodoListPage";
import {authorizationCheckThunk} from "./BLL/AuthReducer";

class App extends React.Component {
    componentDidMount() {
        this.props.authorizationCheckThunk();
    }

    render = () => {
        return (
            <>
                <div className={'Content'}>
                    <Route path='/todoList' render={() => <TodoListPage/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
                {this.props.isAuth ? <Redirect to={'/todoList'}/> : <Redirect to={'/login'}/>}
            </>
        );
    }
}

const mapStateToProps = state => ({isAuth: getAuthUserIsAuthS(state)});
export default connect(mapStateToProps, {authorizationCheckThunk})(App);