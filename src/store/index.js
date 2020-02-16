import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './modules';

const middleware = applyMiddleware(promise, thunk);

export default createStore(rootReducer, compose(middleware));
