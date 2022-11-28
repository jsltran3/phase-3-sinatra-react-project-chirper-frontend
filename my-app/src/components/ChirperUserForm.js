import React, { useState } from "react";

function ChirperUserForm ({ handleUserSubmit }){
	const [newUser, setNewUser] = useState({name: ''});

	const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/chirper_profile/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(r => r.json())
    .then(user => {
      handleUserSubmit(user);
      setNewUser({
        name: ''
      })
			console.log(user)
    })
    
  }

  return(
    <div>
 	   <h2>Add new Chirper User</h2>
      <form className='Form' onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" name="name" onChange={handleChange} required/>
        <button className='Form-button'>Create User</button>
      </form>
    </div>
  )

}

export default ChirperUserForm;

// import React, { useState } from "react";

// function ChirperUserForm ({ handleUserSubmit }){
// 	const [newUser, setNewUser] = useState({name: ''});
  
// 	function handleFormInputChange(event) {
// 		setNewUser({...newUser,[event.target.name]: event.target.value});
// 	};

// 	const handleChange = (e) => {
//     setNewUser({...newUser, [e.target.name]: e.target.value})
//   };

// 	// function handleUserSubmit(event) {
// 	// 	event.preventDefault();
		
// 	// 	fetch('http://localhost:9292/chirper_profile/', {
// 	// 		method: "POST", 
// 	// 		headers: {
// 	// 			'Accept': "application/json",
// 	// 			'Content-Type': "application/json",
// 	// 		},
// 	// 		body: JSON.stringify( newUser )
// 	// 	})
// 	// 		.then((resp) => resp.json())
// 	// 		.then(user => {
// 	// 			handleUserSubmit(user);
// 	// 			setNewUser({
// 	// 				name: ''
// 	// 			})
// 	// 		})
// 	// }

// 	const handleSubmit = (e) => {
//     e.preventDefault();
// 		fetch('http://localhost:9292/chirper_profile/', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newUser)
//     })
//     .then(r => r.json())
//     .then(user => {
//       handleUserSubmit(user);
//       setNewUser({
//         name: ''
//       })
//     })
    
//   }
  
// 	return(
// 	  <div>
// 	   <h2>Add new Chirper User</h2>
// 		<form className='Form' onSubmit={handleUserSubmit}>
// 		  <input type="text" placeholder="Chirper name" onChange={handleChange} required/>
// 		  <button className='Form-button'>Create Chirper</button>
// 		</form>
// 	  </div>
// 	)
  
//   }
  
// export default ChirperUserForm;
