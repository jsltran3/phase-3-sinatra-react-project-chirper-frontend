import React, { useEffect, useState } from "react";
import ChirperDelete from "./ChirperDelete";
import ChirperForm from "./ChirperForm";
import ChirperPatch from "./ChirperPatch";

function ChirperPage() {
  // get everything to show up
  const [userLists, setUserlist] = useState({})
  const [newUser, setNewUser] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/chirper_profile")
          .then((resp) => resp.json())
          .then((users) => {
              setUserlist(users)
          });
        }, []);

  function handleAddUser(newUser) {
    setUserlist([...userLists, newUser]);
  }

  const guestToDisplay = () => {
    
  }

  return (
    <div>
      <ol>

      </ol>
    </div>
    )
};



export default ChirperPage;
