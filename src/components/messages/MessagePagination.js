import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessageListElement from './MessageListElement';

/**
 * This component formats the message list by dividing it into pages for better readability
 *
 * The component takes 2 props, *messages* and *divider*.
 * The *messages* are passed by the parent component as an array of object in props.
 * A *divider* is also passed as props to specify how many messages are shown by pages
 *
 * The component has a *chunkedData* and *currentIndex* state propriety
 * The *chunkedData* is the results of messages data chunked into arrays
 * The *currentIndex* keep track of the page selected by the user
 *
 * In order to display chunked data the component use several helper functions :
 *
 * *chunkData()* return the data as arrays whose number depends on the props *divider*
 *
 * *nextPage()* and *prevPage()* are used to navigate between pages
 *
 * *renderChunkedData()* return only the list of messages of the active page, loop on them and return a component for each of them
 *
 * *getPosition()* return the number of messages displayed on screen and the total of messages
 *
 * The component make the list scroll on top when the component is updated
 *
 * The view render buttons to navigate between pages and the list of messages for the active page
 *
 */

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
