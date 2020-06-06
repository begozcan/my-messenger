import React from 'react';
import './App.scss';
import Navbar from "./features/navbar/Navbar";
import ChatList from "./features/chat/chat-list/ChatList";
import ChatWindow from "./features/chat/chat-window/ChatWindow";

function App() {
    return (
        <div className="App">
            <header>
                <Navbar/>
            </header>
            <div className="App-content">
                <ChatList/>
                <ChatWindow/>
            </div>
        </div>
    );
}

export default App;
