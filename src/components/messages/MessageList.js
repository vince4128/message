import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions';

/**
 * This component return the list of all the messages
 * The messages are objects in an array fetched from redux the redux store using *fetchMessages* action
 *
 * This component return the *MessagePagination* component passing all the messages as a props to build a list of messages.
 */

import MessagePagination from './MessagePagination';

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages } = this.props;
    if (messages.length > 0) {
      return <MessagePagination divider={25} dataToChunk={messages} />;
    }
    return <div>MessageList loading...</div>;
  }
}

const mapStateToProps = state => {
  return { messages: Object.values(state.messages).reverse() };
};

export default connect(
  mapStateToProps,
  { fetchMessages }
)(MessageList);
