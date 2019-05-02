import { FETCH_MESSAGE, FETCH_MESSAGES } from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
  }

  return state;
};
