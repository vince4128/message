import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMessage } from '../../actions';

class MessageShow extends Component {
  componentDidMount() {
    this.props.fetchMessage(this.props.match.params.id);
  }

  render() {
    if (this.props.message) {
      const { body, title, confidential } = this.props.message;

      return (
        <React.Fragment>
          <div className="m-message-controls">
            <Link to={'/'}>
              <button className="a-button a-button--light a-button--lg a-button--direction a-button--shadow">
                ‹
              </button>
              Retour
            </Link>
            <div className="m-message-show">
              <h2>{title}</h2>
              <p>{body}</p>
              <p>{confidential}</p>
              <p
                className={`m-message__privacy-text text--sm ${
                  confidential
                    ? 'm-message__privacy-text--private'
                    : 'm-message__privacy-text--public'
                }`}
              >
                message {confidential ? 'privé' : 'public'}
              </p>
            </div>
          </div>
        </React.Fragment>
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
