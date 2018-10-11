import React, { Component } from 'react';
import './App.css';
import PostPage from './componets/PostContainer/PostPage';
import Auth from './componets/Auth/Auth';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}

export default Auth(App);
