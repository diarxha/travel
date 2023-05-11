import { useState, useEffect } from 'react';
import React from 'react';
import Navbar from './Components/Navbar';

function App() {
  const [users, setUsers] = useState([]); 

  const getUsers = async ()=>{
  try {
    const response = await fetch("http://localhost:5000/getUsers");
    const jsonData = await response.json();
    setUsers(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};

useEffect(() => {
  getUsers();
}, []);

  return (
    <React.Fragment>
      <Navbar/>
    </React.Fragment>
  );
}

export default App;
