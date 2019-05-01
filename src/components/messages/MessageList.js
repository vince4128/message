import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions';

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    return <div>MessageList</div>;
  }
}

export default connect(
  null,
  { fetchMessages }
)(MessageList);
