import './chat.css';

import React from 'react';
import Message from '../../components/Message/Message'
import AddMsgForm from "../../components/AddMsgForm/AddMsgForm"

const AUTHORS = {
    ME: "Me",
    BOT: "Robot"
}

export default function Chat() {
    const [ messageList, setMessageList ] = React.useState([]);
    
    const getCnt = (list = []) => {
        if (list.length === 0) return 1;
        let idArr = [];
        for (let i = 0; i < list.length; i++) {
          idArr.push(list[i].id);
        }
        return Math.max.apply(null, idArr) + 1;
    }
    
    React.useEffect(() => {
        if( messageList.length && 
            messageList[messageList.length - 1].author !== AUTHORS.BOT) {
          setTimeout(() => {
            setMessageList((currMessageList) => [
              ...currMessageList,
              { id: getCnt(currMessageList), author: AUTHORS.BOT, message: "Good joke, bro!" }
            ])
          }, 1500)
        }
    }, [ messageList ]);

    const submitHandler = (msg) => {
        setMessageList(currMessageList => ([
            ...currMessageList, 
            { id: getCnt(currMessageList), author: AUTHORS.ME, message: msg }
        ]));
    };

    return (
      <div>
        <div className="chatBlock">
          { messageList.map((msg) => 
              <div key={ msg.id } className="msgList">
                  <span>{ msg.author }:</span> <Message text={ msg.message } />
              </div>
          ) }
        </div>
        <AddMsgForm submitHandler={ submitHandler } authors={ AUTHORS } />
      </div>
    );
}