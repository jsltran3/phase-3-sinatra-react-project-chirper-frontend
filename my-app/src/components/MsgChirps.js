import React, { useState } from "react";
import SubmitChirps from "./SubmitChirps";
import { v4 as uuidv4 } from 'uuid';
import MsgList from "./MsgList";



function MsgChirps({ msg, userLists, viewChirpList }) {
    const [chirpsMsg, setChirpsMsg] = useState(msg.chirp_message);



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

    // const chirpMsg = user.chirps.map((msg) => (
    // 	<MsgChirps 
    // 		key={msg.id} 
    // 		id={msg.id} 
    // 		msg={msg}
    // 		userLists={userLists}
    // 		viewChirpList={viewChirpList}
    // 	/>
    // ))

    	// const chirpMsgs = msg.chirps.map((msg) => msg)
      // const showChirps = msg.chirps.map(msg => msg.chirp_message)
      // console.log(msg)
	// 	<MsgChirps 
	// 		key={msg.id} 
	// 		id={msg.id} 
	// 		msg={msg}
	// 		userLists={userLists}
	// 		viewChirpList={viewChirpList}
	// 	/>
	// ))

    if(viewChirpList === true){
    return (
      <div className="showing chirps">
        <h3>alksdfjalksdfj</h3>
        {msg.chirp_message}
        <div>
        {msg.chirp_message}
            {/* <SubmitChirps userLists={userLists} msg={msg} onAddMsg={handleAddMsg}/> */}
        </div>
          {/* <React.Fragment> */}
              <li>{msg.chirp_message}</li>
              {/* {userLists.chirps.map((msg) => (<MsgChirps key={uuidv4()} chirpsMsg={chirpsMsg} handleDeleteChirp={handleDeleteChirp}/>))} */}
            {/* <MsgList key={uuidv4()} chirpsMsg={chirpsMsg} handleDeleteChirp={handleDeleteChirp} setChirpsMsg={setChirpsMsg} /> */}
          {/* </React.Fragment> */}
      </div>
    )
    }

}

export default MsgChirps;