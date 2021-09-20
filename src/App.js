import './App.css';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chat from './components/Chat/Chat'

function App() {
  const [ chatList, setChatList ] = React.useState([
    { id: 1, name: "John" },
    { id: 2, name: "Alen" },
    { id: 3, name: "Freddy" },
    { id: 4, name: "Group React" }
  ]);

  const [ curChat, setCurChat ] = React.useState(chatList[0]);

  const handleChangeChat = chat => setCurChat(chat);

  return (
    <div className="App">
      <header className="App-header">
        This is a new app!
        <h3>Hello User</h3>
      </header>
      <main>
        <div className="block-chatList">
          <List subheader="MY CHATS:">
            { chatList.map(chat => {
                return (
                  <ListItem button 
                            key={ chat.id } 
                            selected={ chat.id === curChat.id } 
                            onClick={ () => { handleChangeChat(chat) } }>
                              { chat.name }
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
