import { CHANGE_IS_AUTH, CHANGE_IS_ONLINE, CHANGE_NAME } from "../actions/profile.js";

const initialState = {
    name: "Marcus",
    age: 36,
    isOnline: true,
    isAuth: false
}

export default function profileReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload.name
            }
        }
        case CHANGE_IS_ONLINE: {
            return {
                ...state,
                isOnline: action.payload.isOnline
            }
        }
        case CHANGE_IS_AUTH: {
            return {
                ...state,
                isAuth: action.payload.isAuth
            }
        }
        default:
            return state;
    }
}