import React, { Component } from "react";

import "./search.scss";
import Header from "./header";

import SearchResult from "./searchResult";

const currentPage = "about";
class searchUI extends Component {
  state = {
    searchTerm: "",
    lastSearchTerm: "",
  };
  handleSearch = () => {
    this.setState({
      lastSearchTerm: this.state.searchTerm,
    });
  };

  render() {
    return (
      <div className='searchUI'>
        <Header />
        {currentPage === "search" ? (
          <div className='su-searchInput'>
            <input
              value={this.state.searchTerm}
              type='text'
              onChange={(event) =>
                this.setState({ searchTerm: event.target.value })
              }
            />
            <button onClick={this.handleSearch}>Search</button>
            <SearchResult searchFor={this.state.lastSearchTerm} />
          </div>
        ) : (
          <div className='about'>
            <span>
              This little web-app was done by me.Feel free to send me an email
              hello@google.com
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default searchUI;
