import axios from "axios";
import React, { useEffect, useState } from "react";
import FriendCard from "../components/friendCard";

import "../style/home.scss";

export default function Home() {
  const [friends, setfriends] = useState([]);

  function getFriends() {
    const getFriendsUrl = "http://127.0.0.1:5000/friends";
    axios
      .get(getFriendsUrl)
      .then((response) => response.data)
      .then((data) => {
        setfriends(data);
        console.log(data);
      });
  }

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div className="home">
      <h1 className="home_title">HOME PAGE RIGHT HERE</h1>
      <div className="home_container">
        {friends.map((friend) => {
          return (
            <FriendCard
              key={friend.id}
              name={friend.name}
              description={friend.description}
            />
          );
        })}
      </div>
    </div>
  );
}
