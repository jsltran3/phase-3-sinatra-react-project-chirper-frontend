import React, { useState } from "react";

function SubmitChirps ({userListsId , handleAddMsg}){
  const [submitMsg, setSubmitMsg] = useState({
    chirp_message: '',
    chirper_profile_id: userListsId,
    Like: false,
  })
 
  const handleChange = (event) => {
    setSubmitMsg({...submitMsg, [event.target.name]: event.target.value})
};

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:9292/chirp', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(setSubmitMsg)
    })
    .then(r => r.json())
    .then(chirp => {
      handleAddMsg(chirp);
      setSubmitMsg({
        first_name: '',
        last_name: '',
        donation: '',
        donation_received: false
      })
    })
    
  }

  return(
    <div>
        <form className='Form-donate' onSubmit={handleSubmit}>
          <input type="text" placeholder="Chirp Message..." value={setSubmitMsg.chirp_message} name="first_name" onChange={handleChange} required/>
          <button className='Form-button'>Chirp!</button>
        </form>
    </div>
  )

}

export default SubmitChirps;
