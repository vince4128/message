import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import messageReducer from './messageReducer';

export default combineReducers({
  messages: messageReducer,
  form: formReducer
});
