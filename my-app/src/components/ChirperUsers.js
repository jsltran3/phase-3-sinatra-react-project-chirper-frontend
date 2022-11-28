import React, { useState } from "react";
import { v4 as uuidv4} from 'uuid'
import SubmitChirps from "./SubmitChirps";
import MsgChirps from "./MsgChirps";

function ChirperUsers({ userLists, viewChirpList }) {
	const [chirpsMsg, setChirpsMsg] = useState(userLists.chirps);

  function handleRemoveUser(id) {
    const list = userLists.filter((user) => user.id !== id);
    setUserlists(list)
  }

	function handleAddMsg(newMsg) {
		setChirpsMsg([...chirpsMsg, newMsg]);
		console.log(newMsg)
	}

	if(viewChirpList === true){
		return(
			<div>
				<SubmitChirps userLists={userLists.id} handleAddMsg={handleAddMsg}/>
				<div className='Background'>
			<h3>Chirps Msgs:</h3>
				<table>
				 <thead>
					 <tr>
						 <th>Chirp Submit</th>
						 <th>Delete</th>
					 </tr>
				 </thead>
				 <tbody>
					 {chirpMsg.map((msg) => (<MsgChirps key={uuidv4()} chirpMsg={chirpMsg} handleRemoveUser={handleRemoveUser}/>))}
				 </tbody>
				</table>
		</div> 
			</div>
		)}
	}
	


export default ChirperUsers;


