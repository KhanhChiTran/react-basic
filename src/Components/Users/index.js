import React, { useEffect, useState } from "react";
import userData from "../../data/user.json";
import "./user.scss";

const userApi = "https://jsonplaceholder.typicode.com/users";

const User = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(userApi)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setUserData(resData);
      })
      .catch((err) => console.log(err));
  }, []);

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
