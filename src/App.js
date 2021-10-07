import './App.css';
import React from 'react';
import { List, ListItem, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import Chat from './components/Chat/Chat'
import { useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Input from "./components/Input/input";
import { addChat, removeChat } from './store/actions/chats';

function App() {
  const match = useRouteMatch("/chats/:chatId");
  const chatList = useSelector(state => state.chats);
  const dispatch = useDispatch();

  const [ curChat, setCurChat ] = React.useState(null !== match ? match.params.chatId : "");

  let chat;
  if (curChat.id) {
    chat = <Chat id={ curChat.id } />;
  }

  const handleChangeChat = chat => setCurChat(chat);

  const getCnt = (list = []) => {
    if (list.length === 0) return 1;
    let idArr = [];
    for (let i = 0; i < list.length; i++) {
      idArr.push(list[i].id);
    }
    return Math.max.apply(null, idArr) + 1;
  }

  const onAddChat = (name) => {
    dispatch(addChat(`${getCnt(Object.values(chatList))}`, name))
  }

  const onRemoveChat = (chatId) => {
    dispatch(removeChat(chatId))
  }

  return (
    <div className="App">
      <main>
        <div className="block-chatList">
          <List subheader="MY CHATS:">
            { Object.values(chatList).map(chat => {
                return (
                  <div key={ chat.id }>
                    <ListItem button
                              key={ chat.id } 
                              selected={ chat.id === curChat.id } 
                              onClick={ () => { handleChangeChat(chat) } }>
                              <Link to={`/chats/${ chat.id}`}>{ chat.name }</Link>
                              <IconButton variant="contained" onClick={ () => onRemoveChat(chat.id) }>
                                <DeleteIcon />
                              </IconButton>
                    </ListItem>
                  </div>
                )
            }) }
          </List>
          <Input
            label="Chat Name"
            placeholder="Enter the chat name"
            onSubmit={ onAddChat }
           />
        </div>
        <div>
          { chat }
        </div>
      </main>
    </div>
  );
}

export default App;
