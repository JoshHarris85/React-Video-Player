// Components need to import react because when we translate
// jsx to js it turns into a call like react.CreateElement

// Import React and pull of property Component as its own
import React, { Component } from 'react';

// class component and gives it react.component functionality
class SearchBar extends Component {
  // initialize state. Constructor called first on obj creationg for setup
  //
  constructor(props) {
    // call parent method from component
    super(props);
    // initialize state. this.state will contain properties we want to hold
    this.state = {term: ''};
  }

  // Must have defined render method for class components
  render() {
    //onChange is the input handler
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}
        />
        {this.state.term}
      </div>
    );
  }

}

export default SearchBar;
