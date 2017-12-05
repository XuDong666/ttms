/**
 * Created by xudong on 17-11-14.
 */
import {combineReducers} from 'redux';

import loginReducer from './login/reducer';
import studioReducer from './studio/reducer';
const reducers = combineReducers(
    {
        loginReducer,
        studioReducer
    });

export default reducers;