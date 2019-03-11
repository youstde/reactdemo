import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import BaseLayout from './components/BaseLayout'
import AuthorizedRoute from './components/AuthorizedRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <AuthorizedRoute />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
