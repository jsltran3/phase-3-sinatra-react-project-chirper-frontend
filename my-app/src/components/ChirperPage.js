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

// import React, { useState } from "react";
// import MsgList from "./MsgList";
// import { v4 as uuidv4 } from 'uuid';
  
// function ChirperPage({ userLists, name, id, setUserlists }) {
//   const [viewChirpList, setViewChirpList] = useState(false);

//   const handleViewToggle = () => {
// 		setViewChirpList(!viewChirpList)
// 	}

//   function handleRemoveUser(id) {
//     const list = userLists.filter((user) => user.id !== id);
//     setUserlists(list)
//   }

//   const handleDeleteUser = () => {
// 		fetch(`http://localhost:9292/chirper_profile/${userLists.id}`, {
// 				method: 'DELETE',
// 		})
// 			.then(resp => resp.json())
// 			.then(deletedUser => handleRemoveUser(deletedUser.id));
// 	  }
//     // console.log(name)

//     return(
//       <div key={id}>
//         <p>{userLists.name}</p>
//           {/* <div className="Student-pad" key={uuidv4()}> */}
//           <div className="Student-pad" key={userLists.id}>

//            <div>
//             <table className='Table, Student-header'>
//              <thead>
//               <tr>
//                 <th>{name}</th>
//                 {/* <button className='Delete-button' onClick={handleDeleteUser}>Delete</button> */}

//                 <th>
//                  <button className='Button1' onClick={handleViewToggle}>{viewChirpList ? 'Hide Chirps' : 'Show Donors'}</button>
//                 </th>
//               </tr>
//              </thead>
//             </table>
//           </div>
          // <MsgList userLists={userLists} viewChirpList={viewChirpList}/>
//           </div>
//       </div>
//     )
// };

// export default ChirperPage;

