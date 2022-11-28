import React, { useEffect, useState } from 'react';
import './index.css';
import ChirperUserForm from './components/ChirperUserForm';
import ChirperPage from './components/ChirperPage';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import './App.css';

function App() {
  const [userLists, setUserlists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/chirper_profile')
        .then((resp) => resp.json())
        .then((users) => setUserlists(users))
      },[]);

  // const handleUserSubmit = (user) => {
  //   setUserlists(user)
  // }

    console.log(userLists)


  const handleUserSubmit = (user) => {
    setUserlists(user)
  }

  

  const showUsers = userLists.map((users) => (
    // console.log(users.chirps)
    <ChirperPage users={users} />
  ))

  return (
    <div>
      <Header />
      <ChirperUserForm  handleUserSubmit={handleUserSubmit} />
      {showUsers}
    </div>
  )
}

export default App;

