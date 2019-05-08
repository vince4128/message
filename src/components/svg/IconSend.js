import React from 'react';
import PropTypes from 'prop-types';

/**
 * Return an svg icon inbox taking width, height and fill color as props.
 */

const IconSend = ({ width, height, fill }) => {
  return (
    <React.Fragment>
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill={fill}
      >
        <path d="M507 1.3a10 10 0 0 0-10 0L313.6 109.9a10 10 0 1 0 10.1 17.2l131.5-77.8-244.9 254.1-121.8-37.2 159-94a10 10 0 0 0-10.2-17.2L58.9 260.4a10 10 0 0 0 2.2 18.2L206.5 323l64.2 116.8.2.3a10 10 0 0 0 15.6 2l73.8-72.1L499 412.6A10 10 0 0 0 512 403V10c0-3.6-2-7-5-8.7zm-235.7 328a10 10 0 0 0-1.8 5.6v61.2l-43.8-79.8 193.9-201.2-148.3 214.1zm18.2 82v-62.9l49 15-49 48zM492 389.5l-196.5-60.1L492 45.7v343.8z" />
        <path d="M164.4 347.6a10 10 0 0 0-14.1 0l-93.4 93.3a10 10 0 0 0 14.2 14.2l93.3-93.4a10 10 0 0 0 0-14.1zM40 472a10 10 0 0 0-14 0L3 495a10 10 0 0 0 14 14l23-23c4-3.8 4-10.2 0-14zM142.6 494.3a10 10 0 0 0-14 0 10 10 0 0 0 0 14.2 10 10 0 0 0 14 0 10 10 0 0 0 0-14.2zM217 420a10 10 0 0 0-14 0l-49.5 49.4a10 10 0 0 0 14.1 14.1l49.5-49.4a10 10 0 0 0 0-14.2zM387.7 416.1a10 10 0 0 0-14.1 0L324 465.7A10 10 0 0 0 338 480l49.6-49.6a10 10 0 0 0 0-14.2zM283.5 136.3a10 10 0 0 0-14.1 0 10 10 0 0 0 7 17 10 10 0 0 0 7.1-17z" />
      </svg>
    </React.Fragment>
  );
};

IconSend.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string
};

IconSend.defaultProps = {
  width: '20',
  height: '20',
  fill: '#fff'
};

export default IconSend;
