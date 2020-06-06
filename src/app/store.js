import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import chatReducer from "../features/chat/chatSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        chats: chatReducer,
    },
});
