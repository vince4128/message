import React, { Component } from 'react';
import MessageListElement from './MessageListElement';

class MessagePagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chunkedData: [],
      currentIndex: 0
    };
  }

  componentDidMount() {
    const { divider, dataToChunk } = this.props;
    const chunkedData = this.chunkData(divider, dataToChunk);
    this.setState({ chunkedData });
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
      return chunkedData[currentIndex].map(item => {
        return (
          <li>
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
      <div>
        {start} -{end <= total ? end : total}&nbsp;/&nbsp;
        {total}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.getPosition()}
        <div>
          <span onClick={() => this.prevPage()}>prev</span>&nbsp;
          <span onClick={() => this.nextPage()}>next</span>
        </div>
        <ul>{this.renderChunkedData()}</ul>
      </React.Fragment>
    );
  }
}

export default MessagePagination;
