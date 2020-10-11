import React, {useState} from 'react';
import './ChatScreen.css'

function ChatScreen(){
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
        }
    ]);


    return (
        <div className="chatScreen">
            <p>YOU MATCHED WITH RAUL ON 4/20/69</p>
            {messages.map((message) => (
                <div className="chatScreen__message">
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    )
};

export default ChatScreen;