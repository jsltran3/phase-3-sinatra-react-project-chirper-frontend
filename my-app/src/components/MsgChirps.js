import React, { useState } from "react";


function MsgChirps({ chirpsMsg, onDeleteMsg }) {
  const [isLike, setIsLike] = useState(chirpsMsg.Like)

    const handleMsgDelete = () => {
      fetch(`http://localhost:9292/chirp/${chirpsMsg.id}`, {
        method: 'DELETE',
      })
      .then(r => r.json())
      .then(deletedMsg => onDeleteMsg(deletedMsg.id))
    }

    //have to migrate and seed 
    const handleEditClick = () => {
      fetch(`http://localhost:9292/chirp/${chirpsMsg.id}`, {
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
        <td>{chirpsMsg.chirp_message}</td>
        <td>
          <button className={isLike ? "Button2" : "Button3"} onClick={handleEditClick}>{isLike ? "Yay" : "Nay"}</button>
        </td>
        <td>
          <button className='Delete-button' onClick={handleMsgDelete} id={chirpsMsg.id}>X</button>
        </td>
       </tr>
  )
}
  
export default MsgChirps;

