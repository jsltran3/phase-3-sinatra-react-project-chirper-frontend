import React, { useEffect, useState } from 'react';
import './index.css';
import ChirperPage from './components/ChirperPage.js';
import './App.css'

function App() {
  const [userLists, setUserlists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/chirper_profile')
        .then((resp) => resp.json())
        .then((users) => setUserlists(users));
      }, []);

  // function handleAddUser(newUser) {
  //   setUserlists([...userLists, newUser]);
  // }

  const handleAddUser = (newUser) => {
    setUserlists(newUser)
  }

  

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
