import React from 'react';

type userObjType = {
    name: string;
    age: number;
    isDone: boolean;
    country: string[];
}

const User2 = ({user}: userObjType) => {
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.age}</p>
        </div>
    );
};

export default User2;