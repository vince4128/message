import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions';

import MessageListElement from './MessageListElement';

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  renderList(messages) {
    return messages.reverse().map(message => {
      return (
        <li key={message.id}>
          <MessageListElement message={message} />
        </li>
      );
    });
  }

  render() {
    if (this.props.messages) {
      return <ul>{this.renderList(this.props.messages)}</ul>;
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
