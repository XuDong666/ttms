/**
 * Created by xudong on 17-11-14.
 */
import * as actionsTypes from './actionTypes';
const stateInit = {
    userMessage: {
        account: '',
        imageUrl: '',
        name: ''
    },
    userMessageStatus: false,
    behavior: '',
    studioMessage: {
        studioId: '',
        studioName: '',
        row: 0,
        col: 0,
        status: 1
    },
    studioMessageStatus: false,
    studioItem: [{studioId: '001', studioName: '一号演出厅'}],
    studioItemStatus: false,
    seatsData: {
        col: 0,
        row: 0,
        status: true
    },
    seatsStatus: false
};
export default (state = stateInit, action) => {
    switch (action.type) {
        case actionsTypes.GET_USER_MESSAGE_SUCCESS:
            return {...state, userMessage: action.userMessage, userMessageStatus: true};
        case actionsTypes.GET_USER_MESSAGE_ERROR:
            return {...state, userMessageStatus: false};
        case actionsTypes.GET_STUDIO_MESSAGE_SUCCESS:
            return {...state, behavior: action.behavior, studioMessage: action.studioMessage, studioMessageStatus: true}
        case actionsTypes.GET_STUDIO_MESSAGE_ERROR:
            return {...state, studioMessageStatus: false}
        case actionsTypes.GET_STUDIO_ITEM_SUCCESS:
            return {...state, studioItem: action.studioItem, studioItemStatus: true};
        case actionsTypes.GET_STUDIO_ITEM_ERROR:
            return {...state, studioItemStatus: false}
        case actionsTypes.GET_SEATS_SUCCESS:
            return {...state, seatsData: action.seatsData, seatsStatus: true};
        case actionsTypes.GET_SEATS_ERROR:
            return {...state, seatsStatus: false}
        default:
            return state;
    }
}
