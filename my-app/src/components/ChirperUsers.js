import React, { useEffect } from "react";
import MsgChirps from "./MsgChirps";

	function ChirperUsers({ user, chirps, id, onRemoveUser}) {

    // useEffect(() => {
	// 	fetch('http://localhost:9292/chirper_profile/:id')
	// 		.then((resp) => resp.json())
	// 		.then(() => { 
	// 			console.log(email)
	// 		});
	// }, []);

	function handleDeleteUser(id) {
		fetch('http://localhost:9292/chirper_profile/${user.id}', {
		  method: "DELETE",
		})
		.then(resp => resp.json())
		// .then(deletedUser => onRemoveUser(id));
		.then(console.log(id))
	  }

	  


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
				<button onClick={handleDeleteUser}>Delet User</button>
			</div>
		</li>
		</div>

    )
}

export default ChirperUsers;