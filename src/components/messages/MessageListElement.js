import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MessageListElement = props => {
  const { title, body, confidential, id } = props.message;

  return (
    <React.Fragment>
      <Link to={`/show/${id}`}>
        <h3 className="m-message__title">{title}</h3>
        <p className="m-message__body">{body}</p>
        <p
          className={`m-message__privacy-text text--sm ${
            confidential
              ? 'm-message__privacy-text--private'
              : 'm-message__privacy-text--public'
          }`}
        >
          message {confidential ? 'privé' : 'public'}
        </p>
        <div
          className={`m-message__privacy ${
            confidential
              ? 'm-message__privacy--private'
              : 'm-message__privacy--public'
          }`}
        />
      </Link>
    </React.Fragment>
  );
};

MessageListElement.propTypes = {
  message: PropTypes.object
};

export default MessageListElement;
