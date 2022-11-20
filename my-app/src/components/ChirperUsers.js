import React, { useEffect } from "react";


function ChirperUsers() {

    useEffect(() => {
		fetch('http://localhost:9292/chirper_profile')
			.then((resp) => resp.json())
			.then(() => { 
				console.log(email)
			});
	}, []);

    return (
        <div>
            
        </div>
    )
}

export default ChirperUsers;