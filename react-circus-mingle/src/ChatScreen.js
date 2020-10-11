import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import './ChatScreen.css'

function ChatScreen(){
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Raul',
            image: 'https://media-exp1.licdn.com/dms/image/C5603AQE3W7Fb3ul_2g/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=M7MdtSMYrOTDZR5XQ1IuUZIhPORIDEzqpAVm1L7Xc9I',
            message: 'whats up'
        },
        {
            name: 'Raul',
            image: 'https://media-exp1.licdn.com/dms/image/C5603AQE3W7Fb3ul_2g/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=M7MdtSMYrOTDZR5XQ1IuUZIhPORIDEzqpAVm1L7Xc9I',
            message: 'I like your smile ...'
        },
        {
            message: 'hehe youre a clown'
        }
    ]);

    const handleSend = (e) =>{
        e.preventDefault();

        setMessages([...messages,{message: input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH RAUL CLOWN HEAD ON 4/20/69</p>
            {messages.map((message) =>
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                        />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )
            )}
            
                <form className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="type a message..."
                    type="text" />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            
        </div>
    );
}

export default ChatScreen;