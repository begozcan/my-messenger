import React from "react";
import './ChatList.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectChats, selectCurrentChat, setCurrentChat} from "../chatSlice";

function ChatList() {
    const chats = useSelector(selectChats);
    const selectedChat = useSelector(selectCurrentChat);
    const dispatch = useDispatch();

    return (
        <div className="ChatList">
            <ul>
                {chats.map(chat => (
                    <li key={chat.user.id}
                        className={selectedChat && selectedChat.user.id === chat.user.id ? 'selected' : ''}
                        onClick={() => dispatch(setCurrentChat(chat.user.id))}>
                        <div className="circular-container">
                            <img src={'avatars/' + chat.user.username.toLowerCase() + '.png'} alt="avatar"/>
                        </div>
                        <span className="username">{chat.user.username}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatList;