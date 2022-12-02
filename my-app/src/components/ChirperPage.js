import React from "react";
import MsgList from "./MsgList";


function ChirperPage ({user, handleDeleteUser }){

  const {name, id} = user

  function handleUserDelete() {
    fetch(`http://localhost:9292/chirper_profile/${user.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(deletedUser => handleDeleteUser(deletedUser.id))
  }

  return(
    <div>
        <div className="User-pad" >
         <div>
          <table className='Table, User-header'>
           <thead>
            <tr>
              <th>{name}</th>
            </tr>
           </thead>
          </table>
          <button className='Delete-button' onClick={handleUserDelete} id={id}>DEL</button>

        </div>
        <MsgList user={user} />
        </div>
    </div>
  )

}

export default ChirperPage;
