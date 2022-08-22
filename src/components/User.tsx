import React from 'react';
//props types
type UserProps = {name: string; age: number, isDone: boolean};

//const User = (props: UserProps) => {
const User = ({name, age, isDone}: UserProps) => {//destructure
    return (
        <div>
            <h3>{name}</h3>
            <h3>{age} years old</h3>
            {isDone? <p>done</p> : <p>not done</p>}
        </div>
    );
};

export default User;