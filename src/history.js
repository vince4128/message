import { createBrowserHistory } from 'history';

/**
 * history object created from the createBrowserHistory method, to access and use it outside the react context.
 * we will use it in the redux actions to redirect the users after the creation of a new message.
 */

export default createBrowserHistory();
