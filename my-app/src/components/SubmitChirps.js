import React, { useState } from "react";
import MsgList from './MsgList';

function SubmitChirps ({userLists , handleAddMsg}){
  const [submitMsg, setSubmitMsg] = useState({
    chirp_message: '',
    chirper_profile_id: userLists,
    Like: false,
  })
 
  const handleChange = (event) => {
    setSubmitMsg({...submitMsg, [event.target.name]: event.target.value})
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

	function handleMsgSubmit() {
		// event.preventDefault();
		const inputMsgDb = ({
			chirp_message: showChirps,
			chirper_profile_id: user.id
		})

		fetch('http://localhost:9292/chirp', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			// body: JSON.stringify({
			// 	"chirp_message": 'submitMsg',
			// 	"chirper_profile_id": user.id

			// }),
			body: JSON.stringify(inputMsgDb),
		})
		.then(resp => resp.json())
		.then(message => {
			handleAddMsg(message);
			setSubmitMsg({
				chirp_message: '', 
				chirper_profile_id: ''
			})
		})
	}
    return(
        <div>
            <form className='Form-donate' onSubmit={handleSubmit}>
                <input type="text" placeholder='Your Chirp...' value={submitMsg.chirp_message} name="first_name" onChange={handleChange} required/>
                <button className='Form-button'>Submit Chirp</button>
            </form>
        </div>
        )

    }
    
export default SubmitChirps; 
	==========
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

