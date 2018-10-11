import React from 'react'

const SearchBar = props => {
    return (
        <div className="search">
        <div className="logo">
        <i className="fa fa-instagram" />
        </div>
        <div>
            <h1>Instagram</h1>
        </div>
        <div>
          <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
        </div>
        <div className="social-wrapper">
          <div className="logos">
            <i className="fa fa-compass" />
          </div>
          <div className="logos">
            <i className="fa fa-heart" />
          </div>
          <div className="logos">
            <i className="fa fa-user-circle" />
          </div>
        </div>
      </div>
    );
  };


export default SearchBar;