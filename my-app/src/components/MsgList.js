import React, { useState } from "react";
import { v4 as uuidv4} from 'uuid'
import SubmitChirps from "./SubmitChirps";
import MsgChirps from "./MsgChirps";

function MsgList({ userLists, viewChirpList }) {
	const [chirpsMsg, setChirpsMsg] = useState(userLists.chirps);

  const onDeleteMsg = (id) => {
		const updatedMsgs = chirpsMsg.filter(showChirps => showChirps.id !== id);
		setChirpsMsg(updatedMsgs);
	}

  function handleAddMsg(newMsg) {
    setChirpsMsg([...chirpsMsg, newMsg]);
  }


		return(
			<div>
				<SubmitChirps 
          userListsId={userLists.id} 
          handleAddMsg={handleAddMsg}/>
				<div className='Background'>
			<h3>Chirps Msgs:</h3>
				<table>
				 <thead>
					 <tr>
						 <th>Chirp List</th>
             <th>Like?</th>
						 <th>Delete</th>
					 </tr>
				 </thead>
				 <tbody>
					 {/* {showAllChirps.map((msg) => (<MsgChirps key={msg.id} chirpMsg={chirpsMsg} onDeleteMsg={onDeleteMsg}/>))} */}
				 </tbody>
				</table>
		</div> 
			</div>
		)
	}

export default MsgList;

