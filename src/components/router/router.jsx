import "../../App.css";

import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import App from "../../App.js";

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
                <Route path="/chats/:chatId" component={ App } />
                <Route path="/profile">
                    <div className="profile-block">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae hic vitae eaque sit voluptatum provident eveniet possimus labore magnam harum natus, quidem culpa animi maiores quod reprehenderit magni aperiam.
                        Ad consequuntur aperiam, maxime culpa aliquam labore incidunt facilis? Excepturi temporibus repudiandae earum aut. Nesciunt quos illo exercitationem id aliquam, quia aperiam maxime optio veniam blanditiis quo adipisci laborum obcaecati?
                        Ratione nam dolorem soluta perspiciatis maxime, odio impedit doloremque praesentium enim animi tempora! Earum error eveniet libero hic. Nostrum dolor dicta recusandae culpa possimus vel. Molestiae tenetur dolorem odit eum!
                        Perferendis minus excepturi omnis laborum earum possimus mollitia molestias adipisci harum minima fugit saepe suscipit vero error placeat totam voluptatum iste veniam, culpa dicta illo ratione voluptas. Odit, maiores aut.
                        Assumenda temporibus, amet quam possimus nihil magnam aspernatur dignissimos pariatur voluptatibus quasi, alias officiis explicabo nostrum voluptates eius hic voluptatum? Cumque, sit nam. Magnam minus atque fuga eius dolor nam.</p>
                    </div>
                </Route>
                <Route>
                    <h1>404: page not found!</h1>
                </Route>
            </Switch>
        </div>
    );
}