import React, { useEffect, useState } from "react";
import ChirperDelete from "./ChirperDelete";
import ChirperForm from "./ChirperForm";
import ChirperPatch from "./ChirperPatch";
import ChirperUsers from "./ChirperUsers";

function ChirperPage() {
  // get everything to show up
  const [userLists, setUserlist] = useState({})
  const [newUser, setNewUser] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/chirper_profile")
          .then((resp) => resp.json())
          .then((users) => {
              setUserlist(users)
              console.log(users)
          });
        }, []);

  function handleAddUser(newUser) {
    setUserlist([...userLists, newUser]);
  }

  function handleRemoveUser(id) {
    const newListings = listings.filter((listing) => listing.id !== id);
    setListings(newListings);
  }

  // handleAddFood = (e) => {
  //   e.preventDefault();

  //   fetch("http://localhost:9292/foods", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       text: this.state.newFood,
  //       meal: this.state.chooseMeal,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({
  //         foods: [...this.state.foods, data.food],
  //         newFood: "",
  //       });
  //     });
  // };

  // handleDelete = (deleteFood) => {
  //   fetch("http://localhost:9292/foods/" + deleteFood.id, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   this.setState({
  //     foods: this.state.foods.filter((food) => food !== deleteFood),
  //   });
  // };

  const userToDisplay = () => {
    return userLists.filter(user => {
      return true 
    })
  }

  return (
    <div>
      <ChirperForm />
      <h3>Chirper User Pages</h3>
      <ul>
        {userToDisplay().map((user) => (
          <ChirperUsers
            key={user.id}
            user={user}
            onRemoveUser={handleRemoveUser}
            />
        ))}
      </ul>
    </div>
    )
};



export default ChirperPage;
