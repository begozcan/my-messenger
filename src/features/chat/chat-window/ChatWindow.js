import './ChatWindow.scss';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentChat, sendMessage} from "../chatSlice";


function ChatWindow() {
    const currentChat = useSelector(selectCurrentChat);
    const dispatch = useDispatch();

    const onKeyUp = e => {
        if (e.key === 'Enter') {
            const message = {from: 0, to: currentChat.user.id, text: e.target.value};
            dispatch(sendMessage(message));
            e.target.value = '';
        }
    };

    return (
        <div className="ChatWindow">
            {currentChat && (
                <>
                    <div className="header">
                        <span className={currentChat.user.isOnline ? 'dot online' : 'dot'}></span>
                        <span className="username">{currentChat.user.username}</span>
                    </div>
                    <hr/>
                    <ul>
                        {currentChat.messages.map((message, i) => (
                            <li key={i} className={message.from !== 0 ? 'left' : ''}>
                                <div className="message">
                                    {message.text}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="message-input">
                        <textarea placeholder="Send a message" name="message" rows="4" cols="50"
                                  onKeyUp={onKeyUp}></textarea>
                        <p className="hint">Press Enter to send!</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default ChatWindow;