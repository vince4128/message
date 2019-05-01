import { FETCH_MESSAGES, FETCH_MESSAGE, CREATE_MESSAGE } from './types';
import message from '../api/message';

export const fetchMessages = () => async dispatch => {
  const response = await message.get('/posts');
  dispatch({ type: FETCH_MESSAGES, payload: response.data });
};

export const fetchMessage = id => async dispatch => {
  const response = await message.get(`/posts/${id}`);
  dispatch({ type: FETCH_MESSAGE, payload: response.data });
};

export const createMessage = data => {
  return {
    type: CREATE_MESSAGE,
    payload: data
  };
};
