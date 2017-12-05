/**
 * Created by xudong on 17-11-14.
 */
import request from 'superagent';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
export default store => next => action => {
    if (action.type === actionTypes.LOGIN_IN) {
        request.post('#接口')
            .send({...action})
            .end((err, res) => {
                    //
                    res.flag = 1;
                    //
                    //
                    // if (err) {
                    //     return;
                    // }
                    if (res.flag === 0) {
                        next(actions.loginErrorPassword());
                    }

                    if (res.flag === 1) {
                        next(actions.loginSuccess(action.account));
                    }
                }
            )
    }else {
        next(action)
    }
}