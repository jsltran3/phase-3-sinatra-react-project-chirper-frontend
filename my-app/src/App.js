import React, { useEffect, useState } from 'react';
import './index.css';
import ChirperPage from './components/ChirperPage.js';
import ChirperForm from "./ChirperForm";
import ChirperUsers from "./ChirperUsers";
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

  const handleAddUser = (newUser) => {
    setUserlists(newUser)
  }

  const allUsers = userLists.map((users) => (
    <ChirperPage userLists={userLists} key={uuidv4()} />
  ))


  return (
    <div className="App">
      <Header />
        <p>
          Project 3: Chirper
        </p>
        <h3>
          <ChirperPage 
            userLists={userLists}
            setUserlists={setUserlists}
            handleAddUser={handleAddUser}
          />
        </h3>
        {allUsers}
    </div>
  );
}

export default App;
