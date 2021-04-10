import React, { Component } from "react";

import User from "./User";
import users from "./data.json";
class searchResult extends Component {
  render() {
    const lastSearchTerm = this.props.searchFor;
    const searchedUser = users.filter((user) =>
      user.name.toLowerCase().includes(lastSearchTerm.toLowerCase())
    );
    console.log(searchedUser);

    let renderUser = [...users];
    if (lastSearchTerm.length > 0) {
      renderUser = searchedUser;
    }

    return (
      <div className='search-result'>
        <table>
          <thead>
            <tr>
              <td> ID </td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {renderUser.map((user, index) => {
              return <User key={index} user={user} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default searchResult;
