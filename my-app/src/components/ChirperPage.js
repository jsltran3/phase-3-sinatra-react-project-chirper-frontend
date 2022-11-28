import React, { useEffect, useState } from "react";
import MsgChirps from "./MsgChirps";
import ChirperUsers from "./ChirperUsers";
import { v4 as uuidv4 } from 'uuid';

// function ChirperPage({ userLists, setUserlists, handleAddUser}) {
  function ChirperPage({ userLists }) {

  const [newUser, setNewUser] = useState([]);
  const [viewChirpList, setViewChirpList] = useState(false);

  const handleViewToggle = () => {
		setViewChirpList(!viewChirpList)
	}


  function handleRemoveUser(id) {
    const list = userLists.filter((user) => user.id !== id);
    setUserlists(list)
  }

  	// 	setViewChirpList(!viewChirpList)
	// }

  //
  // const userToDisplay = userLists.map((user) => (
  //   <ChirperUsers 
  //     user={user} 
  //     id={user.id}
  //     handleRemoveUser={handleRemoveUser}
  //     key={uuidv4()} 
  //     userLists={userLists}
  //   />
  // ))

  // return (
  //   <div>

    return(
      <div>
          <div className="Student-pad" key={uuidv4()}>
           <div>
            <table className='Table, Student-header'>
             <thead>
              <tr>
                <th>{student.first_name} {student.last_name}</th>
                <th>
                 <button className='Button1' onClick={handleDonateClick}>{seeDonors ? 'Hide Donors' : 'See Donors'}</button>
                </th>
              </tr>
             </thead>
            </table>
          </div>
          <DonorsList student={student} seeDonors={seeDonors}/>
          </div>
      </div>
    )
};



export default ChirperPage;