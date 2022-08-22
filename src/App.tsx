import React from 'react';
import './App.css';
// import User from './components/User';
// import User2 from './components/User2';
// import UserPractice from './components/UserPractice';
// import DataFetch from './DataFetch';
// import Button from './components/Button';
import BtnStyle from './components/BtnStyle';

function App() {
  return (
    <div className="App">
 <h3>Style props</h3>
 <BtnStyle btnStyle={{color: 'red'}}/>
    </div>
  );
}

export default App;
