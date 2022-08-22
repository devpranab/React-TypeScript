import React from 'react';
import './App.css';
import User from './components/User';
import User2 from './components/User2';
import UserPractice from './components/UserPractice';

//object type
// const userObj = {
//   name: "Pravas Sarkar",
//   age: 20,
//   isDone: true,
//   country: ["India", "USA", "London"]
// }

const users = [
  {
    id: 1,
    name: "MS",
    sub: "Python",
    skill: 83
  },
  {
    id: 2,
    name: "PS",
    sub: "JavaScript",
    skill: 80
  }
]

function App() {
  return (
    <div className="App">
     <h2>User Management</h2>
     <User name="Pranav Sarkar" age={23} isDone={true}country={["India", "USA", "London"]}/>
     <User name="Ramij Reja" age={25} isDone={false} country={["India", "USA", "London"]}/>
     {/* <User2 user={userObj}/> */}
     <UserPractice users={users}/>
    </div>
  );
}

export default App;
