import React, { useState } from "react";
import DonorsList from "./DonorsList";
import MsgList from './MsgList';

function DonateForm ({student , handleDonorSubmit}){
  const [donorForm, setDonorForm] = useState({
    first_name: '',
    last_name: '',
    donation: '',
    donation_received: false,
    student_id: student
  })
 
  const handleChange = (e) => {
    setDonorForm({...donorForm, [e.target.name]: e.target.value})
  };

  const handleIntChange = (e) => {
    setDonorForm({...donorForm, [e.target.name]: parseFloat(e.target.value)})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/donors', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(donorForm)
    })
    .then(r => r.json())
    .then(donor => {
      handleDonorSubmit(donor);
      setDonorForm({
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
          <input type="text" placeholder="First Name" value={donorForm.first_name} name="first_name" onChange={handleChange} required/>
          <input  type="text" placeholder="Last Name"value={donorForm.last_name} name="last_name" onChange={handleChange} required/>
          <input  type="number" placeholder="Donation Amount" value={donorForm.donation} name="donation" onChange={handleIntChange} required/>
          <button className='Form-button'>Submit Donation</button>
        </form>
    </div>
  )

}

export default DonateForm;


====
import React, { useState } from "react";

function SubmitChirps({ msg, userLists, onAddMsg }) {
    //put submit tweet button here
    const [submitMsg, setSubmitMsg] = useState({
        chirp_message: '',
        chirper_profile_id: userLists
    })

    function handleAddMsg(newMsg) {
		setChirpsMsg([...chirpsMsg, newMsg]);
		console.log(newMsg)
	}

    const handleChange = (event) => {
        setSubmitMsg({...submitMsg, [event.target.name]: event.target.value})
    };

    const handleMsgSubmit = (event) => {
			event.preventDefault();
			fetch('http://localhost:9292/chirp', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(submitMsg)
			})
			.then(resp => resp.json())
			.then(message => {
				onAddMsg(message);
				setSubmitMsg({
					chirp_message: ''
				})
			})
			
		}
		console.log("where's my submit form??")

    return (
        <div>
          {/* <form onSubmit = {handleAddSubmit}>  */}
					<form onSubmit={handleMsgSubmit}>  
					{/* <label className="text-input" > */}
            <p>New Chirp</p> 
                <input
										type="text"
                    className="tweet-box"
                    // id="tweet"
                    // name="tweet"
                    value={msg.chirp_message}
                    onChange={handleChange}
                />
                {/* </label> */}
                <button className="submit-box" type="submit">Submit</button>
            </form>
        </div>

    )
}

export default SubmitChirps; 