import React, { useState } from "react";
import { v4 as uuidv4} from 'uuid'
import SubmitChirps from "./SubmitChirps";
import MsgChirps from "./MsgChirps";

function MsgList({ users, viewChirpList, id }) {
	const [chirpsMsg, setChirpsMsg] = useState(users.chirps);

  const onDeleteMsg = (id) => {
		const updatedMsgs = chirpsMsg.filter(showChirps => showChirps.id !== id);
		setChirpsMsg(updatedMsgs);
	}

  function handleAddMsg(newMsg) {
    setChirpsMsg([...chirpsMsg, newMsg]);
  }
  console.log(id, "i'm on the msglist")
  // console.log(userLists)
  // const showAllChirps = chirpsMsg.chirps.map(msgs => msgs.chirp_messages)

  // console.log(showAllChirps)
  // const showAllId = 
		return(
			<div>
				<SubmitChirps 
          userLists={users}
          handleAddMsg={handleAddMsg}
          id={id}
        />
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
					 {/* {chirpsMsg.map((msg) => (<MsgChirps key={id} chirpMsg={chirpsMsg} onDeleteMsg={onDeleteMsg}/>))} */}
				 </tbody>
				</table>
		</div> 
			</div>
		)
	}

export default MsgList;

