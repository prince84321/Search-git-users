import React, { useEffect, useState } from "react";
import "./useEffect.scss";

function UseEffect() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getUser = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUser();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="useEffect">
      <h1>List of GitHub Users</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="container">
        {filteredUsers.map((data, index) => (
          <div key={index} className="cards">
            <div className="cards-img">
              <img src={data.avatar_url} alt="userImg" />
            </div>
            <div className="cards-content">
              <span>{data.login}</span>
              <p>{data.node_id}</p>
              <div className="follower">
                <div className="action">
                  <span>Actions</span>
                  <span>45</span>
                </div>
                <div className="action">
                  <span>Followers</span>
                  <span>987</span>
                </div>
                <div className="action">
                  <span>Ratings</span>
                  <span>9.8</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseEffect;
