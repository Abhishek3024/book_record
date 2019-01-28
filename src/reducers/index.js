import { combineReducers } from 'redux';
import { routerReducer }from 'react-router-redux';
import books from './books';
import authors from './authors';

const rootReducer = combineReducers({authors, books, routing: routerReducer });

export default rootReducer;