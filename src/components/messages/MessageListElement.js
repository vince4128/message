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
        <h4 className="m-message__privacy">
          {confidential ? 'private' : 'public'}
        </h4>
        <hr />
      </Link>
    </React.Fragment>
  );
};

MessageListElement.propTypes = {
  message: PropTypes.object
};

export default MessageListElement;
