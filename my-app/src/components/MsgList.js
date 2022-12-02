import React, { useState } from "react";
import SubmitChirps from './SubmitChirps';
import MsgChirps from './MsgChirps';

function MsgList({ user }) {
	const [chirpsMsg, setChirpsMsg] = useState(user.chirps);

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
				user={user}
				handleAddMsg={handleAddMsg}
			/>
		<div className='Background'>
			<h3>Chirps Msgs:</h3>
				<table>
					<thead>
						<tr>
							<th>Chirp List</th>
							<th>Reaction</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{chirpsMsg.map((msg) => (<MsgChirps msg={msg} key={msg.id} onDeleteMsg={onDeleteMsg}/>))}
					</tbody>
				</table>
		</div> 
		</div>
	)
}

export default MsgList;

