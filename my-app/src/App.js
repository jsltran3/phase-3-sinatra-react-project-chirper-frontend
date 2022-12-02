import React, { useEffect, useState } from 'react';
import './index.css';
import ChirperUserForm from './components/ChirperUserForm';
import ChirperPage from './components/ChirperPage';
import Header from './components/Header';
import './App.css';

function App() {
  const [userLists, setUserlists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/chirper_profile')
        .then((resp) => resp.json())
        .then((users) => setUserlists(users))
      },[]);

  const handleUserSubmit = (user) => {
    setUserlists(user)
  }

  function handleDeleteUser(id) {
		const updatedUseres = userLists.filter(updatedList => updatedList.id !== id);
		setUserlists(updatedUseres);
	}

  const showUsers = userLists.map((user) => (
    <ChirperPage key={user.id} user={user} setUserlists={setUserlists} handleDeleteUser={handleDeleteUser} />
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

