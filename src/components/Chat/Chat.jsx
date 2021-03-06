import './chat.css';
import React from 'react';
import { useParams, useRouteMatch } from 'react-router'
import Message from '../../components/Message/Message'
import AddMsgForm from "../../components/AddMsgForm/AddMsgForm"
import AUTHORS from "../../components/AddMsgForm/constants";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, sendMessageToBot } from '../../store/actions/messages';

export default function Chat() {
    const match = useRouteMatch("/chats/:chatId");
    const chatId = match.params.chatId;

    const messageList = useSelector((state) => state.messages[chatId] || [])
    const dispatch = useDispatch()
    
    const getCnt = (list = []) => {
        if (list.length === 0) return 1;
        let idArr = [];
        for (let i = 0; i < list.length; i++) {
          idArr.push(list[i].id);
        }
        return Math.max.apply(null, idArr) + 1;
    }

    const submitHandler = (msg) => {
      dispatch(sendMessageToBot(chatId, {
        id: `${getCnt(messageList)}`,
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