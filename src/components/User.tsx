import React from 'react';
//props types
type UserProps = {
    name: string; 
    age: number;
    isDone: boolean;
    country: string[]
};

//const User = (props: UserProps) => {
const User = ({name, age, isDone, country}: UserProps) => {//destructure
    return (
        <div>
            <h3>{name}</h3>
            <h3>{age} years old</h3>
            {isDone? <p>done</p> : <p>not done</p>}
            <h4>
                From: 
                {country.map((c,i) => {
                    return <span key={i}>{c} ,</span>;
                })}
            </h4>
        </div>
    );
};

export default User;
// built-in props types pass