import React, { useState } from "react";
import SubmitChirps from "./SubmitChirps";
import { v4 as uuidv4 } from 'uuid';
import MsgList from "./MsgList";



function MsgChirps({ chirpMsg, handleRemoveUser }) {
    // const [chirpsMsg, setChirpsMsg] = useState(msg.chirp_message);
  const [isLike, setIsLike] = useState(Chirp.donation_received)



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

    //have to migrate and seed 
    const handleEditClick = () => {
      fetch(`http://localhost:9292/chirp/${msg.id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "Like": !isLike
        })
      })
      .then(resp => resp.json())
      .then(data => setIsLike(data.Like))
    }
    return(
    
      <tr>
        <td>{donor.first_name} {donor.last_name}</td>
        <td>${donor.donation}</td>
        <td>
          <button className={isDonate ? "Button2" : "Button3"} onClick={handleClick}>{isDonate ? "Yes" : "No"}</button>
        </td>
        <td>
          <button className='Delete-button' onClick={handleDelete} id={donor.id}>X</button>
        </td>
       </tr>
  )
}
  
export default MsgChirps;

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
