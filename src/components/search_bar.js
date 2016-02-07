
import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){

    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        Search: <input placeholder="star wars"
                onChange={ (event) => this.onInputChange(event.target.value) } />

      </div>
    )
  }

  onInputChange(query) {

      clearTimeout(this.Timer);
      this.Timer = setTimeout(() => {
        this.props.onSearchTermChange(query);
        this.setState({term: query})
      }, 500)

  }

}


export default SearchBar;
