  /**
 * Created by xudong on 17-11-14.
 */
import request from 'superagent';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
export default store => next => action => {

    if (action.type === actionTypes.GET_USER_MESSAGE) {
        request.post('#接口')
            .send({...action})
            .end((err, res) => {
                    res.message={
                        account:action.account,
                        imageUrl:'http://upload.jianshu.io/users/upload_avatars/5644050/c1446080-f5e6-4e6f-96ed-47e1285c6be7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/300',
                        name:'xudong'
                    }
                    if (res.message) {
                        next(actions.getUserMessageSuccess(res.message));
                    }
                    else {
                        next(actions.getUserMessageError());
                    }
                }
            )
    }
    else if(action.type ===actionTypes.GET_STUDIO_ITEM){
        request.post('#接口')
            .send({...action})
            .end((err, res) => {
                    res.studioItem=[{studioId:'001',studioName:'一号演出厅'},
                        {studioId:'002',studioName:'二号演出厅'},
                        {studioId:'003',studioName:'三号演出厅'}];
                    if (res.studioItem) {
                        next(actions.getStudioItemSuccess(res.studioItem));
                    }
                    else {
                        next(actions.getStudioItemError());
                    }
                }
            )
    }
    else if(action.type ===actionTypes.GET_STUDIO_MESSAGE){
        request.post('#接口')
            .send({...action})
            .end((err, res) => {
                    res.studioMessage={
                        studioId:'001',
                        studioName:'一号演出厅',
                        row:10,
                        col:10,
                        status:1
                    }
                    if (res.studioMessage) {
                        next(actions.getStudioMessageSuccess(res.studioMessage,action.behavior));
                    }
                    else {
                        next(actions.getStudioMessageError(action.behavior));
                    }
                }
            )
    }
    else if(action.type ===actionTypes.GET_SEATS){
        request.post('#接口')
            .send({...action})
            .end((err, res) => {
                    res.seatsData=[];
                    for(let row=0;row<10;row++){
                        for(let col=0;col<10;col++){
                            res.seatsData.push({
                                row:row,
                                col:col,
                                status:true
                            })
                        }

                    }
                    if (res.seatsData) {
                        next(actions.getSeatsSuccess(res.seatsData));
                    }
                    else {
                        next(actions.getSeatError());
                    }
                }
            )
    }
    else{
        next(action);
    }


}