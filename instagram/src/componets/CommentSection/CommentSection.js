import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }

  componenetWillUnmount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  handleCommentSubmit = event => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: 'This_Guy'};
    const comments = [...this.state.comments];
    comments.push(newComment);
    this.setState({ comments, comment: '' });
    setTimeout(() => {
      this.setComments();
    }, 200);
  };

  render() {
    return (
      <div>
        {this.state.comments.map((a, b) => <Comment key={b} comment={a} />)}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.handleCommentSubmit}
          changeComment={this.commentHandler}
        />
      </div>
    );
  }
}


export default CommentSection;