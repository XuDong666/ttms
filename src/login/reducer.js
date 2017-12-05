/**
 * Created by xudong on 17-11-14.
 */
import * as actionsTypes from './actionTypes'
export default (state={loginStatus:false,account:""},action)=>{
    switch (action.type){
        case actionsTypes.LOGIN_SUCCESS:
            return {...state,loginStatus:true,account:action.account};
        case actionsTypes.LOGIN_ERROR_PASSWORD:
            return{...state,loginStatus:false};
        default:
            return state;
    }
}
