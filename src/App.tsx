import React from 'react';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
     <h2>User Management</h2>
     <User name="Pranav Sarkar" age={23} isDone={true}/>
     <User name="Ramij Reja" age={25} isDone={false}/>
    </div>
  );
}

export default App;
