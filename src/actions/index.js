import { FETCH_MESSAGES, FETCH_MESSAGE, CREATE_MESSAGE } from './types';
import message from '../api/message';
import history from '../history';

/**
 * actions for fetch and post data
 *
 * *fetchMessages* fetch messages data from the api at the endpoint "/posts"
 * *fetchMessage* fetch a message from the endpoint "/posts/:id"
 * *createMessage* add a message to the store
 *
 * Fetching data is an asynchronous action to handle that we use redux-thunk.
 * redux-thunk allow to return a function instead of an object from an action and to manually dispatch the action when the data are present.
 *
 */

export const fetchMessages = () => async dispatch => {
  const response = await message.get('/posts');
  dispatch({ type: FETCH_MESSAGES, payload: response.data });
};

export const fetchMessage = id => async dispatch => {
  const response = await message.get(`/posts/${id}`);
  dispatch({ type: FETCH_MESSAGE, payload: response.data });
};

export const createMessage = formValues => dispatch => {
  dispatch({ type: CREATE_MESSAGE, payload: formValues });
  history.push('/');
};
