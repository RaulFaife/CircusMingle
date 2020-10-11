import React from 'react';
import './Chats.css';
import Chat from "./Chat.js";

function Chats(){
    return(
        <div className="chats">
            <Chat 
                name="Raul Clown Head"
                message="Welcome to Circus Mingle!"
                timestamp="35 minutes ago"
                profilePic="https://media-exp1.licdn.com/dms/image/C5603AQE3W7Fb3ul_2g/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=M7MdtSMYrOTDZR5XQ1IuUZIhPORIDEzqpAVm1L7Xc9I"
            />
        </div>
    )
};

export default Chats;