/**
 * Created by xudong on 17-11-14.
 */
import * as actionTypes from './actionTypes';

export const loginIn=(message)=>{
    return {
        type:actionTypes.LOGIN_IN,
        account:message.account,
        password:message.password
    }
}

export const loginErrorPassword=()=>{
    return{
        type:actionTypes.LOGIN_ERROR_PASSWORD
    }
}

export const loginSuccess=(account)=>{
    return{
        type:actionTypes.LOGIN_SUCCESS,
        account:account
    }
}