import {createSlice} from '@reduxjs/toolkit';

export const chatListSlice = createSlice({
    name: 'chatList',
    initialState: {
        chats: [{id: 1, user: 'Pikachu'}, {id: 2, user: 'Jigglypuff'}],
        selectedChat: -1,
    },
    reducers: {
        setSelectedChat: (state, action) => {
            state.selectedChat = action.payload;
        }
    }
});


export const {setSelectedChat} = chatListSlice.actions;

export const selectChats = state => state.chatList.chats;
export const selectSelectedChat = state => state.chatList.selectedChat;

export default chatListSlice.reducer;
