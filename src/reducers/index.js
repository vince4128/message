import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import messageReducer from './messageReducer';

/**
 * Combine the reducers to form the redux store used in the application.
 * the store contains messages data and the form data
 */

export default combineReducers({
  messages: messageReducer,
  form: formReducer
});
