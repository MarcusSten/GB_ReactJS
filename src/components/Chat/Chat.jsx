import './chat.css';
import React from 'react';
import { useParams, useRouteMatch } from 'react-router'
import Message from '../../components/Message/Message'
import AddMsgForm from "../../components/AddMsgForm/AddMsgForm"
import AUTHORS from "../../components/AddMsgForm/constants";
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageToBot, subscribeOnMsgsChanged  } from '../../store/actions/messages';

export default function Chat() {
    const match = useRouteMatch("/chats/:chatId");
    const chatId = match.params.chatId;

    const messageList = useSelector((state) => state.messages[chatId] || [])
    const dispatch = useDispatch()

    React.useEffect(() => {
      dispatch(subscribeOnMsgsChanged(chatId));
    }, [])

    const submitHandler = (msg) => {
      dispatch(sendMessageToBot(chatId, {
        id: `message${Date.now()}`,
        author: AUTHORS.ME,
        text: msg,
      }));
    };

    return (
      <div>
        <div className="chatBlock">
          { messageList.map((msg) => 
              <div key={ msg.id } className="msgList">
                  <span>{ msg.author }:</span> <Message text={ msg.text } />
              </div>
          ) }
        </div>
        <AddMsgForm submitHandler={ submitHandler } authors={ AUTHORS } />
      </div>
    );
}