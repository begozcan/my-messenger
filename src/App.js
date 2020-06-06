import React from 'react';
import './App.scss';
import Navbar from "./features/navbar/Navbar";
import ChatList from "./features/chat-list/ChatList";

function App() {
    return (
        <div className="App">
            <header>
                <Navbar/>
            </header>
            <div className="App-content">
                <ChatList/>
            </div>
        </div>
    );
}

export default App;
