import {createStore} from 'redux';

import rootReducer from './reducers/index';

import books from './data/books';

const defaultState = {
	books
};

const store = createStore(rootReducer,defaultState);

//export const history = syncHistoryWithStore(browserHistory,store);

export default store;