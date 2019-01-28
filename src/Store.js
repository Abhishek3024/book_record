import {createStore} from 'redux';

import rootReducer from './reducers/index';

import books from './data/books';

import authors from './data/authors';

const initialState = {
	books,
	authors
};

const store = createStore(rootReducer, initialState);

//export const history = syncHistoryWithStore(browserHistory,store);

export default store;