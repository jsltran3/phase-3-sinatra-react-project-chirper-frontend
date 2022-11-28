import React, { useEffect, useState } from 'react';
import './index.css';
import ChirperPage from './components/ChirperPage.js';
import ChirperUserForm from "./ChirperUserForm";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";

import './App.css'

function App() {
  const [userLists, setUserlists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/chirper_profile')
        .then((resp) => resp.json())
        .then((users) => setUserlists(users));
      }, []);

  const handleUserSubmit = (user) => {
    setUserlists(user)
  }

  const allUsers = userLists.map((users) => (
    <ChirperPage userLists={userLists} setUserlists={setUserlists} key={uuidv4()} />
  ))


  return (
    <div className="App">
      <Header />
      <ChirperUserForm handleAddUser={handleUserSubmit} />
      {allUsers}
    </div>
  );
}

export default App;
