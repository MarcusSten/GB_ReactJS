import "../../App.css";
import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import App from "../../App.js";
import Profile from "../../components/profile/index"
import Chat from "../Chat/Chat";

export default function Router() {
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
                <Route>
                    <h1>404: page not found!</h1>
                </Route>
            </Switch>
        </div>
    );
}