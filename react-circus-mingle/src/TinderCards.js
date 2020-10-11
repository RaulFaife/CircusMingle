import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Raul",
            url: "https://media-exp1.licdn.com/dms/image/C5603AQE3W7Fb3ul_2g/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=M7MdtSMYrOTDZR5XQ1IuUZIhPORIDEzqpAVm1L7Xc9I",
            type: "Circus Clown"
        },
        {
            name: "Big Feet Chungus",
            url: "https://images.halloweencostumes.com/products/4507/1-21/child-big-top-clown-costume.jpg",
            type: "Party Clown"
        }
    ]);
    

    return(
        <div>
            <h1>TinderCards</h1>
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up','down']}
                >
                    <div
                        style={{ backgroundImage: `url(${person.url})`}}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards