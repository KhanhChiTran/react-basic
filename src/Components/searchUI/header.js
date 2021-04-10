import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className='su-header'>
        <h1>UserSearch</h1>
        <div className='su-header__nav'>
          <span>Search</span>
          <span>About</span>
        </div>
      </div>
    );
  }
}

export default Header;
