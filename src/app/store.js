import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import chatListReducer from "../features/chat-list/chatListSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        chatList: chatListReducer,
    },
});
