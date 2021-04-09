import React, { Component } from "react";

import "./search.scss";
import Header from "./header";

import SearchResult from "./searchResult";

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
        <div className='su-searchInput'>
          <input
            value={this.state.searchTerm}
            type='text'
            onChange={(event) =>
              this.setState({ searchTerm: event.target.value })
            }
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <SearchResult searchFor={this.state.lastSearchTerm} />
      </div>
    );
  }
}

export default searchUI;
