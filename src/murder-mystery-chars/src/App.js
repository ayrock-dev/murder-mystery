import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg" />
        <div className="content">
          <p className="name">
            Jarvis
            <br/>
            Bennington
          </p>
          <p className="role">
            Friend of the Duke
          </p>
          <p>
            Details
          </p>
        </div>
      </div>
    );
  }
}

export default App;
