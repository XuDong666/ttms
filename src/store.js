/**
 * Created by xudong on 17-11-14.
 */
import {createStore,applyMiddleware} from 'redux';
import loginMiddleware from './login/middleware';
import studioMiddleware from './studio/middleware'
import reducers from './reducers';
const createMiddlewarestore=applyMiddleware(loginMiddleware,studioMiddleware)(createStore);
const store =createMiddlewarestore(reducers);
export default store;