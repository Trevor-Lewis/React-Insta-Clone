import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div className="text">
      <div className="comment">{props.comment.text}</div>
      <div className="username">-{props.comment.username}</div>
    </div>
  );
};


export default Comment;