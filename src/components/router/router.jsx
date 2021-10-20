import "../../App.css";
import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { Link } from "react-router-dom";
import App from "../../App.js";
import Profile from "../../components/profile/index"
import Chat from "../Chat/Chat";
import Spacenews from "../Spacenews/Spacenews";

import Login from "../Login/login";
import { useSelector, useDispatch } from 'react-redux';
import firebase from "firebase";
import { changeIsAuth } from '../../store/actions/profile';

const PrivateRoute = ( props ) => {
    const isAuthed = useSelector((state) => state.profile.isAuth);

    return isAuthed ? <Route { ...props } /> : <Redirect to="/login" />
}

export default function Router() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            dispatch( changeIsAuth( Boolean( user ) ) );
        })
    })

    const handleSignOut = (ev) => {
        ev.preventDefault();

        firebase.auth().signOut();
    }

    return (
        <div>
            <header>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/chats">Chats</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/spacenews">Space News!</Link>
                    </li>
                </ul>
            </header>
            <Switch>
                <Route path="/" exact>
                    <div className="App-home">
                        This is a new app!
                        <h3>Hello User</h3>
                    </div>
                </Route>
                <Route path="/chats" component={ App } />
                <Route path="/chats/:chatId" component={ Chat } />
                <Route path="/profile" component={ Profile } />
                <Route path="/spacenews" component={ Spacenews } />
                <Route path="/login" component={ Login } />
                <Route>
                    <h1>404: page not found!</h1>
                </Route>
            </Switch>
        </div>
    );
}