import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

class App extends Component{
  render(){
  return (
    <BrowserRouter>
      <div className="App">
      </div>
    </BrowserRouter>
    );
  }
}

export default connect()(App);
