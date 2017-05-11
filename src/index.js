import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './Components/search_bar';

// Insert your youtube api key here
const API_KEY = '';

// Create a new Component. This Component should produce some HTML.
// This is a class. Pass the instance to the dom render
class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'Dogs'}, (videos) => {
      // { videos } is the same as {videos: videos}
      // es6 syntax for when the key value are same
      this.setState({videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this Component's generated HTML and put it on the page (DOM)
// <App /> is an instance of App. We are attaching it to the DOM in
// the div by the name of "container"
ReactDOM.render(<App />, document.querySelector('.container'));
