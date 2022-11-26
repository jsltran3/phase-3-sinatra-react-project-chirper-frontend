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


    return (
        <div>
          {/* <form onSubmit = {handleAddSubmit}>  */}
					<form> 
					<label className="text-input" >
            <p>New Chirp</p> 
                <input
                    className="tweet-box"
                    id="tweet"
                    name="tweet"
                    // value={formInput.name}
                    onChange={handleMsgSubmit}
                />
                </label>
                <button className="submit-box" type="submit">Submit</button>
            </form>
        </div>

    )
}

export default SubmitChirps; 