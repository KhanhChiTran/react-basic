import React from "react";
import userData from "../../data/user.json";
import "./user.css";

const User = () => {
  console.log(userData);

  return (
    <div className='userSection'>
      {userData.map((user) => (
        <div className='userWrap' key={user.id}>
          <h3>{user.name}</h3>
          <p>
            <b>User Name: </b>
            {user.username}
          </p>
          <p>
            <b>Tel:</b> {user.phone}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <a href={user.website}>Personal Website</a>
        </div>
      ))}
    </div>
  );
};

export default User;
