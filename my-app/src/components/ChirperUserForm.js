import React, { useState } from "react";

function ChirperUserForm ({handleUserSubmit}){
	const [newUser, setNewUser] = useState({name: ''});
  
	function handleFormInputChange(event) {
		setNewUser({...newUser,[event.target.name]: event.target.value});
	};

	function handleAddSubmit(event) {
		event.preventDefault();
		
		fetch('http://localhost:9292/chirper_profile/', {
			method: "POST", 
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify( newUser )
		})
			.then((resp) => resp.json())
			.then(user => {
				handleUserSubmit(user);
				setNewUser({
					name: ''
				})
			})
	}
  
	return(
	  <div>
	   <h2>Add new Chirper User</h2>
		<form className='Form' onSubmit={handleAddSubmit}>
		  <input type="text" placeholder="Chirper name" value={newUser.name} name="first_name" onChange={handleFormInputChange} required/>
		  <button className='Form-button'>Create Chirper</button>
		</form>
	  </div>
	)
  
  }
  
export default ChirperUserForm
