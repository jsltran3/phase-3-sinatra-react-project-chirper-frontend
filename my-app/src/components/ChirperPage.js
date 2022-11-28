import React, { useState } from "react";
import MsgList from "./MsgList";


function ChirperPage ({users, mainChirps, id}){

  console.log(users)

  
  return(
    <div>
        <div className="User-pad" key={id}>
         <div>
          <table className='Table, User-header'>
           <thead>
            <tr>
              <th>{users.name}</th>
              <th>
                {/* <button className='Button1' onClick={handleViewToggle}>{viewChirpList ? 'Hide Chirps' : 'Show Chirps'}</button> */}
              </th>
            </tr>
           </thead>
          </table>
        </div>
        <MsgList users={users} id={id} />
        </div>
    </div>
  )

}

export default ChirperPage;
