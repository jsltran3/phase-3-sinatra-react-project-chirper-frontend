import React from "react";
import MsgList from "./MsgList";


function ChirperPage ({user, handleDeleteUser }){

  function handleUserDelete() {
    fetch(`http://localhost:9292/chirper_profile/${user.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(deletedUser => handleDeleteUser(deletedUser.id))
  }

  return(
    <div>
        <div className="User-pad" key={user.id}>
         <div>
          <table className='Table, User-header'>
           <thead>
            <tr>
              <th>{user.name}</th>
            </tr>
           </thead>
          </table>
          <button className='Delete-button' onClick={handleUserDelete} id={user.id}>DEL</button>

        </div>
        <MsgList user={user} />
        </div>
    </div>
  )

}

export default ChirperPage;
