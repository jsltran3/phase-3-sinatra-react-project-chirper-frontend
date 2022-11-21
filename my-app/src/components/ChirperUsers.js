import React, { useEffect } from "react";


function ChirperUsers({ 
	user: {id, name, onRemoveUser }
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

	

    return (
		<li>
			<div>
				<h3>
					{name}
				</h3>
			</div>
		</li>

    )
}

export default ChirperUsers;