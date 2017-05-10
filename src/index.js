import React from "react";
import ReactDOM from "react-dom";

// Create a new Component. This Component should produce some HTML.
// This is a class. Pass the instance to the dom render
const App = () => {
  return <div>Hi!</div>;
}

// Take this Component's generated HTML and put it on the page (DOM)
// <App /> is an instance of App. We are attaching it to the DOM in
// the div by the name of "container"
ReactDOM.render(<App />, document.querySelector('.container'));
