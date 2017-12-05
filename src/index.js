import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import {view as Login} from './login/';
import {view as Studio} from './studio/';
import store from './store';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Login}/>
            <Route path='/studio' component={Studio}/>
        </Router>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
