import React, { useState } from "react";
import MsgList from "./MsgList";


function ChirperPage ({userLists, name, id}){


  
  return(
    <div>
        <div className="User-pad" key={id}>
         <div>
          <table className='Table, User-header'>
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
