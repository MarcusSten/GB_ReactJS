import './msgList.css';

import React from 'react';

import Message from '../../components/Message/Message'

export default function MsgList({ text }) {
    return text.list.map((msg) => 
        <div key={ msg.id } className="msgList">
            <span>{ msg.author }:</span> <Message text={ msg.message } />
        </div>
    );
}