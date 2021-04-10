import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, email } = this.props.user;
    return (
      <tr>
        <td> {id} </td>
        <td> {name} </td>
        <td> {email}</td>
      </tr>
    );
  }
}

export default User;
