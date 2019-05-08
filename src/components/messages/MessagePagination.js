import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessageListElement from './MessageListElement';

class MessagePagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chunkedData: [],
      currentIndex: 0
    };
    this.firstElement = React.createRef();
  }

  componentDidMount() {
    const { divider, dataToChunk } = this.props;
    const chunkedData = this.chunkData(divider, dataToChunk);
    this.setState({ chunkedData });
  }

  componentDidUpdate() {
    this.firstElement.current.scrollIntoView();
  }

  chunkData = (divider, dataToChunk) => {
    const chunked = [];
    let index = 0;

    while (index < dataToChunk.length) {
      chunked.push(dataToChunk.slice(index, index + divider));
      index += divider;
    }

    return chunked;
  };

  setCurrentIndex = index => {
    this.setState({ currentIndex: index });
  };

  nextPage = () => {
    const { currentIndex, chunkedData } = this.state;
    if (currentIndex < chunkedData.length - 1) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  };

  prevPage = () => {
    const { currentIndex } = this.state;

    if (currentIndex > 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };

  renderChunkedData = () => {
    const { chunkedData, currentIndex } = this.state;

    if (chunkedData[currentIndex]) {
      return chunkedData[currentIndex].map((item, index) => {
        return (
          <li
            key={item.id}
            className="m-message"
            ref={index === 0 ? this.firstElement : ''}
          >
            <MessageListElement message={item} />
          </li>
        );
      });
    }
  };

  getPosition = () => {
    const { divider, dataToChunk } = this.props;
    const { currentIndex } = this.state;

    const start = divider * currentIndex + 1;
    const end = divider * (currentIndex + 1);
    const total = dataToChunk.length;

    return (
      <React.Fragment>
        {start} - {end <= total ? end : total}&nbsp;sur&nbsp;
        {total} messages.
      </React.Fragment>
    );
  };

  render() {
    const { currentIndex, chunkedData } = this.state;
    return (
      <React.Fragment>
        <div className="m-message-controls">
          <button
            className="a-button a-button--light a-button--lg a-button--direction a-button--shadow"
            onClick={() => this.prevPage()}
            disabled={currentIndex === 0}
          >
            ‹
          </button>
          &nbsp;
          <button
            className="a-button a-button--light a-button--lg a-button--direction a-button--shadow"
            onClick={() => this.nextPage()}
            disabled={currentIndex === chunkedData.length - 1}
          >
            ›
          </button>
          &nbsp;{this.getPosition()}
        </div>
        <ul className="m-message-list">{this.renderChunkedData()}</ul>
      </React.Fragment>
    );
  }
}

MessagePagination.propTypes = {
  divider: PropTypes.number,
  dataToChunk: PropTypes.arrayOf(PropTypes.object)
};

MessagePagination.defaultProps = {
  divider: 25
};

export default MessagePagination;
