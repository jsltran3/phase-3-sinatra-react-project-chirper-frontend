import React, { useState } from "react";
import MsgChirps from "./MsgChirps";
import { v4 as uuidv4} from 'uuid'
import SubmitChirps from "./SubmitChirps";


	function ChirperUsers({ user, chirps, handleRemoveUser, userLists}) {
		const [viewChirpList, setViewChirpList] = useState(false);

	function handleDeleteUser() {
		fetch(`http://localhost:9292/chirper_profile/${user.id}`, {
		  method: "DELETE",
		})
		.then(resp => resp.json())
		.then(deletedUser => handleRemoveUser(deletedUser.id));
		// .then(console.log(id))
	  }

	const handleViewToggle = () => {
		setViewChirpList(!viewChirpList)
	}

	const chirpMsg = user.chirps.map((msg) => (
		<MsgChirps 
			key={msg.id} 
			id={msg.id} 
			msg={msg}
			userLists={userLists}
			viewChirpList={viewChirpList}
		/>
	))

	//show chirps
	const showChirps = user.chirps.map(msg => msg.chirp_message)
	const showChirpKey = user.chirps.map(msg => msg.chirper_profile_id)
	// console.log(showChirps)
	// const chirpMsg = chirps.map((msg) => (
	// 	<MsgChirps key={msg.id} id={msg.id} msg={msg}/>))

	// ===========
	const [chirpsMsg, setChirpsMsg] = useState(showChirpKey);
// 	const [submitMsg, setSubmitMsg] = useState({
// 		chirp_message: '',
// 		chirper_profile_id: user
// })

const [submitMsg, setSubmitMsg] = useState('')


console.log(user.chirps.map(msg => msg.chirper_profile_id))
// const [submitMsg, setSubmitMsg] = useState('')

	const handleDeleteChirp = (id) => {
		const updatedMsgs = chirpsMsg.filter(showChirps => showChirps.id !== id);
		setChirpsMsg(updatedMsgs);
	}

	const handleMsgDelete = () => {
		fetch(`http://localhost:9292/chirp/${showChirps.id}`, {
			method: 'DELETE',
		})
		.then(r => r.json())
		.then(deletedMsg => handleDeleteChirp(deletedMsg.id))
	}

	function handleAddMsg(newMsg) {
		setChirpsMsg([...chirpsMsg, newMsg]);
		console.log(newMsg)
	}

	
	const handleMsgSubmit = (event) => {
		event.preventDefault();
		fetch('http://localhost:9292/chirp', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chirp_message: user.chirp_message,
				chirper_profile_id: user

			}),
		})
		.then(resp => resp.json())
		.then(message => {
			handleAddMsg(message);
			setSubmitMsg({chirp_message: ''})
			// console.log(message, "eh?")
		})
	}

	// function handleAddMsg(newMsg) {
	// 	setChirpsMsg([...chirpsMsg, newMsg]);
	// }

	const handleChange = (event) => {
		setSubmitMsg({...submitMsg, [event.target.name]: event.target.value})
};

	// ===========
	

    return (
			<div>
			
		<li>
			<div>
				<div className="user-area" key={uuidv4()}>
				<div>
				<table className='Chirp-users'>
					<thead>
						<tr>
							<th>{user.name}</th>
							<th>
				
								{/* <button className='Button1' onClick={handleViewToggle}>{viewChirpList ? 'Hide user' : 'View User'}</button> */}
							</th>
						</tr>

				
		
					

					</thead>
								 									
							<th>Chirps</th>
						 <th>{showChirps}</th>
				</table>
			</div>
			</div>
			</div>

			<div>

					{chirpMsg}
	
				{/* <MsgChirps 
					userLists={userLists}
					viewChirpList={viewChirpList}
				/> */}
				{/* {chirpMsg} */}
				{/* {showChirps.chirp_message}
				{showChirps.chirp_message} */}
				{/* whats happening is that its auto called */}
				<button onClick={handleDeleteUser}>Delete User</button>
				<form onSubmit={handleMsgSubmit}>  
					<label className="text-input" >
            <p>New Chirp</p> 
                <input
										type="text"
										placeholder="Chirp Msg"
                    className="tweet-box"
                    // id="tweet"
                    // name="tweet"
                    value={submitMsg.chirp_message}
                    onChange={handleChange}
                />
                </label>
                <button className="submit-box" type="submit">Submit Msg</button>
            </form>
			</div>
		</li>
		</div>

    )
}

export default ChirperUsers;