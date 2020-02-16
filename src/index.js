import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainLayout from './components/layouts/MainLayout';

ReactDOM.render(
    <Provider store={store}>
        <MainLayout />
    </Provider>,
    document.getElementById('root')
);
