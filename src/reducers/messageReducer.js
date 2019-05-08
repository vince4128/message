import {
  FETCH_MESSAGE,
  FETCH_MESSAGES,
  CREATE_MESSAGE
} from '../actions/types';
import _ from 'lodash';

/**
 * Message reducer, returns a new state for messages based on the actions payload.
 */

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      // merge the actual state and the action payload and returns it as a new state
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_MESSAGE:
      //insert or replace an object by using key interpolation syntax in the actual state and returns it as a new state
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_MESSAGE:
      /**
       * For demonstration purpose only
       *
       * We set the id of the message, so we can merge him into the dataset coming from the fake api
       * but in production this will be done by the back end api and the data we will be send by a POST request
       *
       */
      let id = 0;
      const size = Object.keys(state).length;
      if (size <= 100) {
        id = 101;
      } else {
        id = size + 1;
      }
      const newMessage = { ...action.payload, id: id };
      return { ...state, [id]: newMessage };
    default:
      return state;
  }
};
