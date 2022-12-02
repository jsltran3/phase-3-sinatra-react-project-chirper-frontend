import React, { useState } from "react";

function SubmitChirps ({ user, handleAddMsg}){
  const [submitMsg, setSubmitMsg] = useState({
    chirp_message: '',
    chirper_profile_id: user.id,
    like: false
  })
	

  const handleChange = (event) => {
    setSubmitMsg({...submitMsg, [event.target.name]: event.target.value})
};

  const handleSubmit = (e) => {
    e.preventDefault();
		// console.log(submitMsg)
    // debugger
    fetch('http://localhost:9292/chirp', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitMsg)
    })
    .then(r => r.json())
    .then(chirp => {
      handleAddMsg(chirp);
      setSubmitMsg({
        chirper_message: '',
        like: false
      })
    })
    
  }

  return(
    <div>
        <form className='Form-submission' onSubmit={handleSubmit}>
          <input 
            type='text' 
            placeholder='Chirp' 
            name='chirp_message' 
            value={submitMsg.chirp_message} 
            onChange={handleChange} required/>
          <button className='Form-button'>Chirp!</button>
        </form>
    </div>
  )

}

export default SubmitChirps;