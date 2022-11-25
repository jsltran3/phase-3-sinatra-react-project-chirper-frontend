import React from "react";

function SubmitChirps({ msg }) {
    //put submit tweet button here

    return (
        <div>
          {/* <form onSubmit = {handleAddSubmit}>  */}
					<form> 
					<label className="text-input" >
            <p>New Chirp</p> 
                <input
                    className="name-box"
                    id="name"
                    name="name"
                    // value={formInput.name}
                    // onChange={handleFormInputChange}
                />
                </label>
                <button className="submit-box" type="submit">Submit</button>
            </form>
        </div>

    )
}

export default SubmitChirps; 