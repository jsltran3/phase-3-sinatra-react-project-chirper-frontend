import React, { useState } from "react";
import SubmitChirps from "./SubmitChirps";

function MsgChirps({ msg, id }) {
    const [chirpsMsg, setChirpsMsg] = useState(msg.chirp_message);

    function handleDeleteChirp(id) {
		const updatedMsgs = chirpsMsg.filter((msg) => msg.id !== id);
		setChirpsMsg(updatedMsgs);
    }
    
	function handleDeleteMsg() {
		fetch(`http://localhost:9292/chirp/${msg.id}`, {
		  method: "DELETE",
		})
		.then(resp => resp.json())
		// .then(deletedMsg => handleDeleteChirp(msg.id));
		.then(console.log(msg.id))
	
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

    // console.log(msg.id)

    return (
        <div>
            <React.Fragment>
                <li>{msg.chirp_message}</li>
                <button onClick={handleEditClick}>Edit</button> 
                <button onClick={handleDeleteMsg}>Delete Message</button>
            </React.Fragment>
            <SubmitChirps msg={msg}/>
        </div>
    )
}

export default MsgChirps;