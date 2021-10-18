import { ADD_MESSAGE } from "../actions/messages";
import AUTHORS from "../../components/AddMsgForm/constants";

const initialState = {
    '1': [
        { id: 'message1', text: 'Hello! This is my biggest project on React', author: AUTHORS.ME },
        { id: 'message2', text: 'Good joke, bro!', author: AUTHORS.BOT }
    ]
}

export default function messagesReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: [
                    ...(state[action.payload.chatId] || []),
                    action.payload.message
                ]
            }
        }
        default:
            return state;
    }
}