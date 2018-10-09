import React, { Component } from 'react';
import './App.css'; 
import dummyData from './dummy-data';
import PostContainer from './componets/PostContainer/PostContainer';
import SearchBar from './componets/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state= {
     posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
       <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
