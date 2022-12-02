import React, { useState } from "react";


function MsgChirps({ msg, onDeleteMsg }) {
  const [isLike, setIsLike] = useState(msg.like)
  
  // const {chirp_message, id} = msg

    const handleMsgDelete = () => {
      fetch(`http://localhost:9292/chirp/${msg.id}`, {
        method: 'DELETE',
      })
      .then(r => r.json())
      .then(deletedMsg => onDeleteMsg(deletedMsg.id))
    }

    const handleEditClick = () => {
      fetch(`http://localhost:9292/chirp/${msg.id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'like': !isLike
        })
      })
      .then(resp => resp.json())
      .then(data => setIsLike(data.like))
    }

    return(
    
      <tr key={msg.id}>
        <td>{msg.chirp_message}</td>
        <td className ='hoverbox'>
          <button className={isLike ? "Button2" : "Button3"} onClick={handleEditClick}>{isLike ? "♡" : "❤ "}</button>
        </td>
        
        <td>
          <button className='Delete-button' onClick={handleMsgDelete} id={msg.id}>DEL</button>
        </td>
       </tr>
  )
}
  
export default MsgChirps;

