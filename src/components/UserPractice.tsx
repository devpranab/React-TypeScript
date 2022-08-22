import React from 'react';

type UserPracticeType = {
    users: {
        id: number;
        name: string;
        sub: string;
        skill: number;
    }[]
}

const UserPractice = ({users}: UserPracticeType) => {
    return (
        <div>
            {users.map((user) => {
                const {id, name, sub, skill} = user;
                return <div>
                    <h3>{id}</h3>
                    <h3>{name}</h3>
                    <h3>{sub}</h3>
                    <h3>{skill}</h3>
                </div>
            })}
        </div>
    );
};

export default UserPractice;