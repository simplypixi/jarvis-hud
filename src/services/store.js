import createHistory from 'history/createBrowserHistory';
import configureStore from '../modules/store';

const initialState = {};
export const browserHistory = createHistory();
export const store = configureStore(initialState, browserHistory);
