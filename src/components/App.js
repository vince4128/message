import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

import Menu from './Menu';
import MessageList from './messages/MessageList';
import MessageShow from './messages/MessageShow';
import MessageCreate from './messages/MessageCreate';

/**
 * # Message client
 * This is a react application whose objective is to display messages coming from a REST API and to propose a form to write them.
 *
 * This project has been generated using create-react-app see the documentation here :
 * https://github.com/facebook/create-react-app/blob/master/README.md
 *
 * This component App.js is the root of the application
 */
const App = () => {
  return (
    <Router history={history}>
      <Menu />
      <Route path="/" exact component={MessageList} />
      <Route path="/show/:id" component={MessageShow} />
      <Route path="/create" component={MessageCreate} />
    </Router>
  );
};

export default App;
