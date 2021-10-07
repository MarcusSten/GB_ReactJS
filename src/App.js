import './App.css';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chat from './components/Chat/Chat'
import { useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

function App() {
  const { chatId } = useParams();
  const match = useRouteMatch("/chats/:chatId");
  const [ chatList, setChatList ] = React.useState([
    { id: 1, name: "John" },
    { id: 2, name: "Alen" },
    { id: 3, name: "Freddy" },
    { id: 4, name: "Group React" }
  ]);

  const wrongChat = (match) => {
    const findId = null !== match ? match.params.chatId : 0;
    let arr = [];
    for(let i = 0; i < chatList.length; i++) arr.push(chatList[i].id);
    return !arr.includes(findId) ? "Нет такого чата!" : "";
  }

  const [ curChat, setCurChat ] = React.useState(chatList[0]);

  const handleChangeChat = chat => setCurChat(chat);

  return (
    <div className="App">
      <main>
        <div className="block-chatList">
          <List subheader="MY CHATS:">
            { chatList.map(chat => {
                return (
                  <ListItem button 
                            key={ chat.id } 
                            selected={ chat.id === curChat.id } 
                            onClick={ () => { handleChangeChat(chat) } }>
                            <Link to={`/chats/${ chat.id}`}>{ chat.name }</Link>
                  </ListItem>
                )
            }) }
          </List>
        </div>
        <div className="block-chat">
          <Chat id={ curChat.id } />
        </div>
      </main>
    </div>
  );
}

export default App;
