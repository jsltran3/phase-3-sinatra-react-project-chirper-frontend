import React, { useEffect, useState } from "react";
import ChirperDelete from "./ChirperDelete";
import ChirperForm from "./ChirperForm";
import ChirperPatch from "./ChirperPatch";

function ChirperPage() {
    // get everything to show up
    const [userLists, setUserlist] = useState({})
    // const []

    useEffect(() => {
        fetch("http://localhost:9292/chirper_profile")
    })
}

export default ChirperPage;
