import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MessageListElement = props => {
  const { title, body, confidential, id } = props.message;

  return (
    <React.Fragment>
      <Link to={`/show/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{body}</p>
      <h4>{confidential ? 'private' : 'public'}</h4>
      <hr />
    </React.Fragment>
  );
};

MessageListElement.propTypes = {
  message: PropTypes.object
};

export default MessageListElement;
