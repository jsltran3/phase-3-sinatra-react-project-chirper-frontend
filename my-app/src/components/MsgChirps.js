import React, { useState } from "react";
import SubmitChirps from "./SubmitChirps";

function MsgChirps({ msg, id }) {
    const [chirpsMsg, setChirpsMsg] = useState(msg.chirp_message);

    function handleDeleteChirp(id) {
		const updatedMsgs = chirpsMsg.filter((msg) => msg.id !== id);
		setChirpsMsg(updatedMsgs);
    }
    
    function handleDeleteClick() {
        fetch('http://localhost:9292/chirper_profile/${msg.id}', {
          method: "DELETE", 
        })
        .then((resp) => resp.json())
        // .then(() => console.log(id));
        .then(deletedChirp => handleDeleteChirp(deletedChirp)) 
      }

      const handleEditClick = () => {
        fetch(`http://localhost:9292/chirp/${msg.id}`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "Tweet": !chirpsMsg
          })
        })
        .then(resp => resp.json())
        .then(data => setChirpsMsg(data.chirp_message))
      }

    

    return (
        <div>
            <React.Fragment>
                <li>{msg.chirp_message}</li>
                <button onClick={handleDeleteClick}>Edit</button> 
                <button onClick={handleDeleteClick}>Delete</button> 
            </React.Fragment>
            <SubmitChirps />
        </div>
    )
}

export default MsgChirps;