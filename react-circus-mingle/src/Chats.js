import React from 'react';
import './Chats.css';
import Chat from "./Chat.js";

function Chats(){
    return(
        <div className="chats">
            <Chat 
                name="Raul Clown Head"
                message="Welcome to Circus Mingle!"
                timestamp="a few seconds ago"
                profilePic="https://media-exp1.licdn.com/dms/image/C5603AQE3W7Fb3ul_2g/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=M7MdtSMYrOTDZR5XQ1IuUZIhPORIDEzqpAVm1L7Xc9I"
            />
            <Chat 
                name="Elon Musk"
                message="You want to see my huge rocket 😉"
                timestamp="35 minutes ago"
                profilePic="https://i.insider.com/5d922a0d2e22af22cb0c0235?width=1100&format=jpeg&auto=webp"
            />
        </div>
    )
};

export default Chats;