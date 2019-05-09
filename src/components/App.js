import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

import Menu from './Menu';
import MessageList from './messages/MessageList';
import MessageShow from './messages/MessageShow';
import MessageCreate from './messages/MessageCreate';

/**
 * This component is the root of the application, where the router is declared and the routes associated to components
 * * The "/" path render the MessageList component, the list of messages
 * * The "/show/:id" path render the MessageShow component, show a unique message depending on id
 * * The "/create" path render the MessageCreate for the creation of a message
 * The router take the history object from history.js as a parameter.
 */
const App = () => {
  return (
    <Router history={history}>
      <Menu />
      <main className="o-main">
        <Route path="/" exact component={MessageList} />
        <Route path="/show/:id" component={MessageShow} />
        <Route path="/create" component={MessageCreate} />
      </main>
    </Router>
  );
};

export default App;
