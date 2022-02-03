import React, { useState } from "react";
import axios from "axios";

import "../style/Addfriend.scss";

export default function AddFriend() {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [data, setData] = useState(null);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, description);
    const data = { name: name, description: description };
    axios
      .post("http://127.0.0.1:5000/friends/add", data)
      .then((res) => {
        setData(res.data);
        setName("");
        setDesc("");
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
    console.log(data);
  }

  return (
    <div className="add-friend">
      <h2 className="add-friend_title">Add A Friend!</h2>
      <form className="add-friend_form" onSubmit={handleSubmit}>
        <div className="add-friend_input-container">
          <input
            className="add-friend_input"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            className="add-friend_input"
            placeholder="Description"
            value={description}
            onChange={handleDescChange}
          />
        </div>
        <button className="add-friend_button">Add</button>
      </form>
    </div>
  );
}
