import React, { useState } from "react";

function ChirperForm({ onAddUser }) {
//get a submission for tweet messages
    const  [formInput, setFormInput] = useState({name: ""});

		function handleFormInputChange(event) {
			setFormInput({
				...formInput,
				[event.target.name]: event.target.value
			});
		}

    function handleAddSubmit(event) {
        event.preventDefault();
        const newGuestInfo = ({
            name: formInput.name 
        })

        fetch("http://localhost:4000/weddingGuests", {
            method: "POST", 
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify( newGuestInfo )
        })
            .then((resp) => resp.json())
            .then((newUser) => onAddUser(newUser))

                    setFormInput({
            name: ""
                    })
        
    }
    return (
        <div>
            <form onSubmit = {handleAddSubmit}> 
						{/* <p>Add new profile</p> */}
						<label className="text-input" >
            Add new profile: 
							<input
								className="name-box"
								id="name"
								name="name"
								value={formInput.name}
								onChange={handleFormInputChange}
							/>
							</label>
							<button className="submit-box" type="submit">Submit</button>
						</form>
            {/* ={handleSubmit} */}
            <h3>
							Add New Guest
						</h3>
        </div>
    )
}

export default ChirperForm