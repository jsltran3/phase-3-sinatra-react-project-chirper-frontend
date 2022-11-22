import React, { useEffect } from "react";
import MsgChirps from "./MsgChirps";


// function ChirperUsers({ 
// 	user: {id, name, chirp_message },
// 	onRemoveUser
// }) {

	function ChirperUsers({ user, chirps, id, onRemoveUser
	}) {

    // useEffect(() => {
	// 	fetch('http://localhost:9292/chirper_profile/:id')
	// 		.then((resp) => resp.json())
	// 		.then(() => { 
	// 			console.log(email)
	// 		});
	// }, []);

	function handleDeleteClick(id) {
		fetch('http://localhost:9292/chirper_profile/:id)', {
		  method: "DELETE",
		});
		onRemoveUser(id);
	  }
		// console.log(`"this is going to be" ${user.name[1].chirps}`)
	
		// const theList = userLists.map((user) => (
		// 	<ChirperUsers user={user} key={uuidv4()} />
		//   ))


	const chirpMsg = user.chirps.map((msg) => (
		<MsgChirps key={msg.id} id={msg.id} msg={msg}/>))
	

    return (
			<div>
			
		<li>
			<div>
				<span></span>
				<h3>
					{user.name}
					{/* {user.chirps */}
				</h3>
				<ul>
					{chirpMsg}
				</ul>
				<button onClick={handleDeleteClick}>Delete</button>
			</div>
		</li>
		</div>

    )
}

export default ChirperUsers;