import React from 'react';
import PropTypes from 'prop-types';

/**
 * Return an svg icon inbox taking width, height and fill color as props.
 */

const IconInbox = ({ width, height, fill }) => {
  return (
    <React.Fragment>
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill={fill}
      >
        <path d="M512 196.2l-.1-.5c0-.6-.2-1.1-.4-1.7 0-.5-.2-1-.4-1.5l-.9-1.3-1.2-1.3-.3-.4-82-63.7v-66A25.6 25.6 0 0 0 401 34h-92.5l-37-28.7c-9.2-7.2-22-7.2-31.2 0l-37 28.7h-92.5a25.6 25.6 0 0 0-25.6 25.6v66l-82 63.8c-.2.1-.2.3-.3.4l-1.2 1.3-.9 1.3-.4 1.5a8 8 0 0 0-.4 1.7l-.1.5v290.2c0 2.7.5 5.4 1.4 8a8.5 8.5 0 0 0 9.4 12.8c4.3 3.1 9.5 4.8 14.8 4.8h460.8c5.3 0 10.5-1.7 14.8-4.8a8.5 8.5 0 0 0 9.4-12.7c.9-2.7 1.4-5.4 1.4-8.1V196.2zM250.9 18.8c3-2.3 7.2-2.3 10.2 0l19.6 15.3h-49.5L251 18.8zM27.7 495L251 321.6c3-2.4 7.2-2.4 10.1 0l223.3 173.3H27.7zM495 481.6L271.5 308c-9.1-7.1-22-7.1-31 0L17 481.6V209.2l139.8 108.6a8.5 8.5 0 1 0 10.5-13.5L25.3 194l60-46.6v66a8.5 8.5 0 0 0 17 0V59.6c0-4.7 4-8.5 8.6-8.5h290.2c4.7 0 8.5 3.8 8.5 8.5v153.6a8.5 8.5 0 1 0 17 0v-66l60 46.7-142.2 110.5a8.5 8.5 0 0 0 10.4 13.5L495 209.2v272.4z" />
        <path d="M170.7 111h170.6a8.5 8.5 0 1 0 0-17.2H170.7a8.5 8.5 0 1 0 0 17.1zM349.9 153.6c0-4.7-3.9-8.6-8.6-8.6H170.7a8.5 8.5 0 0 0 0 17.1h170.6c4.7 0 8.6-3.8 8.6-8.5zM349.9 204.8c0-4.7-3.9-8.6-8.6-8.6h-76.8a8.5 8.5 0 1 0 0 17.1h76.8c4.7 0 8.6-3.8 8.6-8.5z" />
      </svg>
    </React.Fragment>
  );
};

IconInbox.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string
};

IconInbox.defaultProps = {
  width: '20',
  height: '20',
  fill: '#fff'
};

export default IconInbox;
