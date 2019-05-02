import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions';

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  renderList(messages) {
    return messages.map(message => {
      const { body, title, confidential } = message;
      return (
        <div>
          <h3>{title}</h3>
          <p>{body}</p>
          <h4>{confidential ? 'private' : 'public'}</h4>
          <hr />
        </div>
      );
    });
    console.log(messages);
  }

  render() {
    if (this.props.messages) {
      return <div>{this.renderList(this.props.messages)}</div>;
    }
    return <div>MessageList loading...</div>;
  }
}

const mapStateToProps = state => {
  return { messages: Object.values(state.messages) };
};

export default connect(
  mapStateToProps,
  { fetchMessages }
)(MessageList);
