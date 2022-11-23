import React, { useEffect } from "react";
import MsgChirps from "./MsgChirps";

	function ChirperUsers({ user, chirps, onRemoveUser}) {

    // useEffect(() => {
	// 	fetch('http://localhost:9292/chirper_profile/:id')
	// 		.then((resp) => resp.json())
	// 		.then(() => { 
	// 			console.log(email)
	// 		});
	// }, []);

	// function handleRemoveUser(id) {
	// 	const list = userLists.filter((user) => user.id !== id);
	// 	console.log("this is showing something??");
	//   }

	//used wrong quotes for the fetch
	//already called the object, just need to specifies it
	//goes back to JS, parent function already has the propnj

	function handleDeleteUser() {
		fetch(`http://localhost:9292/chirper_profile/${user.id}`, {
		  method: "DELETE",
		})
		.then(resp => resp.json())
		.then(deletedUser => onRemoveUser(user.id));
		// .then(console.log(id))
	
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
				{/* whats happening is that its auto called */}
				<button onClick={handleDeleteUser}>Delete User</button>
			</div>
		</li>
		</div>

    )
}

export default ChirperUsers;