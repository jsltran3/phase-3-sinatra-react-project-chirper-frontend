import React, { useEffect, useState } from "react";
import MsgList from "./MsgList";
import { v4 as uuidv4 } from 'uuid';
  
function ChirperPage({ userLists, setUserlists }) {
  const [viewChirpList, setViewChirpList] = useState(false);

  const handleViewToggle = () => {
		setViewChirpList(!viewChirpList)
	}

  function handleRemoveUser(id) {
    const list = userLists.filter((user) => user.id !== id);
    setUserlists(list)
  }

  const handleDeleteUser = () => {
		fetch(`http://localhost:9292/chirper_profile/${user.id}`, {
				method: 'DELETE',
		})
			.then(resp => resp.json())
			.then(deletedUser => handleRemoveUser(deletedUser.id));
	  }

    return(
      <div>
          <div className="Student-pad" key={uuidv4()}>
           <div>
            <table className='Table, Student-header'>
             <thead>
              <tr>
                <th>{userLists.name}</th>
                <button className='Delete-button' onClick={handleDeleteUser}>Delete</button>

                <th>
                 <button className='Button1' onClick={handleViewToggle}>{viewChirpList ? 'Hide Chirps' : 'Show Donors'}</button>
                </th>
              </tr>
             </thead>
            </table>
          </div>
          <ChirperUsers userLists={userLists} viewChirpList={viewChirpList}/>
          </div>
      </div>
    )
};

export default ChirperPage;

