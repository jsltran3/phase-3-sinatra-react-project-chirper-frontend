import React, { useState } from "react";

function ChirperUserForm ({handleAddUser}){
	const  [formInput, setFormInput] = useState({name: ''});
	const [newUser, setNewUser] = useState([]);

  
	function handleFormInputChange(event) {
		setFormInput({...formInput,[event.target.name]: event.target.value});
	};
  
  const handleAddUser = (newUser) => {
    setUserlists(newUser)
  }

	function handleAddSubmit(event) {
		event.preventDefault();
		
		fetch('http://localhost:9292/chirper_profile/', {
				method: "POST", 
				headers: {
						Accept: "application/json",
						"Content-Type": "application/json"
				},
				body: JSON.stringify( formInput )
		})
			.then((resp) => resp.json())
			.then(user => {
				handleAddUser(user);
				setFormInput({
					name: ''
				})
			})
	}
  
	return(
	  <div>
	   <h2>Add new Chirper User</h2>
		<form className='Form' onSubmit={handleAddSubmit}>
		  <input type="text" placeholder="Chirper name" value={formInput.name} name="first_name" onChange={handleFormInputChange} required/>
		  <button className='Form-button'>Create Chirper</button>
		</form>
	  </div>
	)
  
  }
  
export default ChirperUserForm
