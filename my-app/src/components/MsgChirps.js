import React, { useState } from "react";
import SubmitChirps from "./SubmitChirps";


      function MsgChirps({ msg, userList, submitMsg, setSubmitMsg, setChirpsMsg, chirpsMsg }) {
    // const [chirpsMsg, setChirpsMsg] = useState(msg.chirp_message);
  //   const [submitMsg, setSubmitMsg] = useState({
  //     chirp_message: '',
  //     chirper_profile_id: userLists
  // })

    // function handleDeleteChirp(id) {
    //   const updatedMsgs = chirpsMsg.filter((msg) => msg.id !== id);
    //   setChirpsMsg(updatedMsgs);
    // }

    const handleDeleteChirp = (id) => {
      const updatedMsgs = chirpsMsg.filter(msg => msg.id !== id);
      setChirpsMsg(updatedMsgs);
    }

    const handleMsgDelete = () => {
      fetch(`http://localhost:9292/chirp/${msg.id}`, {
        method: 'DELETE',
      })
      .then(r => r.json())
      .then(deletedMsg => handleDeleteChirp(deletedMsg.id))
    }

    function handleAddMsg(newMsg) {
      setChirpsMsg([...chirpsMsg, newMsg]);
    }

    const handleSubmitMsgChange = (event) => {
      setSubmitMsg({...submitMsg, [event.target.name]: event.target.value})
    };
  
	// function handleDeleteMsg() {
	// 	fetch(`http://localhost:9292/chirp/${msg.id}`, {
	// 	  method: "DELETE",
	// 	})
	// 	.then(resp => resp.json())
	// 	.then(deletedMsg => handleDeleteChirp(deletedMsg.id));
	// 	// .then(console.log(msg.id))
	
	//   }

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

    console.log(msg.chirp_message, "where is htis?")

    return (
        <div>
          
            <React.Fragment>
                <li>{msg.chirp_message}</li>
                <button onClick={handleEditClick}>Edit</button> 
                <button onClick={handleMsgDelete}>Delete Message</button>
            </React.Fragment>

            {/* <SubmitChirps userLists={userLists} msg={msg} onAddMsg={handleAddMsg}/> */}
        </div>
    )
}

export default MsgChirps;