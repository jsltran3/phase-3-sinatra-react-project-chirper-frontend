import React, { useState } from "react";

function MsgList ({chirpsMsg, msg, setChirpsMsg, handleDeleteChirp}) {

//   const handleDelete = () => {
//     fetch(`http://localhost:9292/donors/${donor.id}`, {
//       method: 'DELETE',
//     })
//     .then(r => r.json())
//     .then(deletedDonor => onDeleteDonor(deletedDonor.id))
//   }

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

//   const handleClick = () => {
//     fetch(`http://localhost:9292/donors/${donor.id}`, {
//       method: 'PATCH',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         "donation_received": !isDonate
//       })
//     })
//     .then(r => r.json())
//     .then(data => setIsDonate(data.donation_received))
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

  

  return(
    
      <tr>
        <td>{chirpsMsg.chirp_message}</td>

        <td>
          <button onClick={handleEditClick}>Edit</button>
        </td>
        <td>
          <button className='Delete-button' onClick={handleMsgDelete} id={msg.id}>Delete</button>
          <button onClick={handleEditClick}>Edit</button> 
            <button onClick={handleMsgDelete}>Delete Message</button>
        </td>
       </tr>
  )
}

export default MsgList;