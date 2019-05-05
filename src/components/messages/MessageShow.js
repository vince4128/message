import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../../actions';

class MessageShow extends Component {
  componentDidMount() {
    this.props.fetchMessage(this.props.match.params.id);
  }

  render() {
    if (this.props.message) {
      const { body, title, confidential } = this.props.message;

      return (
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
          <p>{confidential}</p>
        </div>
      );
    }

    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { message: state.messages[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchMessage }
)(MessageShow);
