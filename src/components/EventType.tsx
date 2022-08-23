import React, { useState } from 'react';

const EventType = () => {
    const [userName, setUserName] = useState("");

    //handleUserNameChange function
    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(userName);
        
    }
    return (
        <div>
            <h2>Typing events</h2>
            <input type="text" placeholder="enter name" value={userName} onChange={handleUserNameChange}/>
            <p>{userName}</p>
            <button onClick={handleClick}>Show userName</button>
        </div>
    );
};

export default EventType;