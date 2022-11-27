import React, { useEffect, useState } from "react";
import ChirperDelete from "./ChirperDelete";
import ChirperForm from "./ChirperForm";
import ChirperUsers from "./ChirperUsers";
import { v4 as uuidv4 } from 'uuid';

function ChirperPage({ userLists, setUserlists, handleAddUser}) {
  const [newUser, setNewUser] = useState([]);


  function handleRemoveUser(id) {
    const list = userLists.filter((user) => user.id !== id);
    setUserlists(list)
    console.log("this is showing something??");
  }

  const userToDisplay = userLists.map((user) => (
    <ChirperUsers 
      user={user} 
      id={user.id}
      handleRemoveUser={handleRemoveUser}
      key={uuidv4()} 
      userLists={userLists}
    />
  ))

  return (
    <div>

      <h3>Chirper User Pages</h3>
      <span>List of Chirper Profiles</span>
      <ChirperForm onAddUser={handleAddUser} />
      <ul>
        {/* {theList().map((user) => (
          <ChirperUsers
            key={user.id}
            id={user.id}
            user={user}
            handleRemoveUser={handleRemoveUser}
            />
        ))} */}
      </ul>
      {userToDisplay}
    </div>
    )
};



export default ChirperPage;