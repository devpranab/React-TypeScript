import React from 'react';
import './App.css';
// import User from './components/User';
// import User2 from './components/User2';
// import UserPractice from './components/UserPractice';
import DataFetch from './DataFetch';

function App() {
  return (
    <div className="App">
     <DataFetch status="success"/>
     <DataFetch status="error"/>
     <DataFetch status="not"/>
    </div>
  );
}

export default App;
