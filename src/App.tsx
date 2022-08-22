import React, {useState} from 'react';
import './App.css';
// import User from './components/User';
// import User2 from './components/User2';
// import UserPractice from './components/UserPractice';
// import DataFetch from './DataFetch';
// import Button from './components/Button';
// import BtnStyle from './components/BtnStyle';

function App() {
  // const [users, setUsers] = useState<null | User>(null);
  const [users, setUsers] = useState<User>({} as User);

  const handleAddUser = () => {
    setUsers({id:1, name:"pravas"});
    console.log(users);
    
  }
  return (
    <div className="App">
 <h2>useState Hook Props</h2>
 {/* <h3>Count: {count}</h3> */}

 <button onClick={handleAddUser}>AddUser</button>
 {/* <p>{users?.name}</p> */}
 <p>{users.name}</p>
    </div>
  );
}

export default App;
