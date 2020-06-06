import {createSlice} from '@reduxjs/toolkit';

const POKEMONS = {
    PIKACHU: 25,
    JIGGLYPUFF: 39,
    ROWLET: 722,
}

function getPokemonReply(pokemonId) {
    switch (pokemonId) {
        case POKEMONS.PIKACHU:
            return 'Pika pi!'
        case POKEMONS.JIGGLYPUFF:
            return '*sings*: Jigglypuuuuff';
        case POKEMONS.ROWLET:
            return '*tweet*';
        default:
            return 'Do I know you?';
    }
}

export const chatSlice = createSlice({
    name: 'chatList',
    initialState: {
        history: [
            {user: {id: POKEMONS.PIKACHU, username: 'Pikachu', isOnline: true}, messages: []},
            {user: {id: POKEMONS.JIGGLYPUFF, username: 'Jigglypuff', isOnline: false}, messages: []},
            {user: {id: POKEMONS.ROWLET, username: 'Rowlet', isOnline: true}, messages: []},
        ],
        currentChatId: null,
    },
    reducers: {
        // This is invoked to change the active chat window
        setCurrentChat: (state, action) => {
            state.currentChatId = action.payload;
            state.currentChat = state.history.find(chat => chat.user.id === action.payload);
        },
        // This is invoked if the user or a Pokemon posts a message
        postMessage: (state, action) => {
            const message = action.payload;
            // The message has to field if it is from the user, from field if it is from a Pokemon
            const user = message.from ? message.from : message.to;

            const currentChat = state.history.find(chat => chat.user.id === user);
            currentChat.messages.push(message);

            // Need to reassign currentChat to update it with latest messages
            state.currentChat = currentChat;
        }
    }
});

// This is invoked when the user wants to send a message to a Pokemon
export const sendMessage = message => (dispatch, getState) => {
    const state = getState();
    const pokemonId = message.to;
    const chat = state.chats.history.find(chat => chat.user.id === pokemonId);

    message.date = Date.now();
    dispatch(postMessage(message));

    // Send Pokemon's reply with some delay
    if (chat.user.isOnline) { // Pokemon should reply only if it is online now
        setTimeout(() => {
            const reply = {from: pokemonId, to: 0, text: getPokemonReply(pokemonId), date: Date.now()};
            dispatch(postMessage(reply));
        }, 1000);
    }
};

export const {setCurrentChat, postMessage} = chatSlice.actions;

export const selectChats = state => state.chats.history;
export const selectCurrentChat = state => state.chats.currentChat;

export default chatSlice.reducer;
