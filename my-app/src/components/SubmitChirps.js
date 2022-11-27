import React, { useState } from "react";

function SubmitChirps({ msg, userLists, onAddMsg }) {
    //put submit tweet button here
    const [submitMsg, setSubmitMsg] = useState({
        chirp_message: '',
        chirper_profile_id: userLists
    })

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