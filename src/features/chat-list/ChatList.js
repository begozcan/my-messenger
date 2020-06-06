import React from "react";
import './ChatList.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectChats, selectSelectedChat, setSelectedChat} from "./chatListSlice";

function ChatList() {
    const chats = useSelector(selectChats);
    const selectedChat = useSelector(selectSelectedChat);
    const dispatch = useDispatch();

    return (
        <div className="ChatList">
            <ul>
                {chats.map(chat => (
                    <li key={chat.id}
                        className={selectedChat === chat.id ? 'selected' : ''}
                        onClick={() => dispatch(setSelectedChat(chat.id))}>
                        <div className="circular-container">
                            <img src={'avatars/' + chat.user + '.png'} alt="avatar"/>
                        </div>
                        <span className="username">{chat.user}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatList;