import React, { useEffect, useState } from "react";
import ChirperDelete from "./ChirperDelete";
import ChirperForm from "./ChirperForm";
import ChirperUsers from "./ChirperUsers";
import { v4 as uuidv4 } from 'uuid';

function ChirperPage() {
  // get everything to show up
  const [userLists, setUserlists] = useState([]);
  const [newUser, setNewUser] = useState([]);

  useEffect(() => {
      fetch('http://localhost:9292/chirper_profile')
          .then((resp) => resp.json())
          .then((users) => {
              setUserlists(users)
              console.log(users)
              console.log("New user list brought in")
          });
        }, []);

  function handleAddUser(newUser) {
    setUserlists([...userLists, newUser]);
  }

  function handleRemoveUser(id) {
    const list = userLists.filter((user) => user.id !== id);
    setUserlists(list)
    console.log("this is showing something??");
  }

  function handleAddUser(newUser) {
		setUserlists([...userLists, newUser]);
	}


  const userToDisplay = () => {
    return userLists.filter(user => {
      return true 
    })
  }

  const theList = userLists.map((user) => (
    <ChirperUsers user={user} key={uuidv4()} />
  ))

  return (
    <div>

      <h3>Chirper User Pages</h3>
      <span>List of Chirper Profiles</span>
      <ChirperForm onAddUser={handleAddUser} />
      <ul>
        {userToDisplay().map((user) => (
          <ChirperUsers
            key={user.id}
            id={user.id}
            user={user}
            handleRemoveUser={handleRemoveUser}
            />
        ))}
      </ul>
      {/* {theList} */}
    </div>
    )
};



export default ChirperPage;
