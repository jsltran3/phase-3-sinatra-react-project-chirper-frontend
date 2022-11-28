import React, { useState } from "react";
import MsgList from "./MsgList";


function ChirperPage ({userLists, name, id}){


  // const showAllChirps = userLists.chirps.map(msg => msg.chirp_message)
  
  return(
    <div>
        <div className="Student-pad" key={id}>
         <div>
          <table className='Table, Student-header'>
           <thead>
            <tr>
              <th>{name}</th>
              <th>
                {/* <button className='Button1' onClick={handleViewToggle}>{viewChirpList ? 'Hide Chirps' : 'Show Chirps'}</button> */}
              </th>
            </tr>
           </thead>
          </table>
        </div>
        <MsgList userLists={userLists} />
        </div>
    </div>
  )

}

export default ChirperPage;
