import { combineReducers } from 'redux';
import threads from './threads';
import status from './status';

export default combineReducers({ threads, status });
