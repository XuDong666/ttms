/**
 * Created by xudong on 17-11-14.
 */
import * as actionTypes from './actionTypes';

export const getUserMessage = (account) => {
    return {
        type: actionTypes.GET_USER_MESSAGE,
        account: account

    }
}

export const getUserMessageError = () => {
    return {
        type: actionTypes.GET_USER_MESSAGE_ERROR,
    }
}

export const getUserMessageSuccess = (userMessage) => {
    return {
        type: actionTypes.GET_USER_MESSAGE_SUCCESS,
        userMessage:userMessage
    }
}

export const getStudioItem=()=>{
    return {
        type:actionTypes.GET_STUDIO_ITEM
    }
}

export const getStudioItemError=()=>{
    return{
        type:actionTypes.GET_STUDIO_ITEM_ERROR
    }
}

export const getStudioItemSuccess=(studioItem)=>{
    return{
        type:actionTypes.GET_STUDIO_ITEM_SUCCESS,
        studioItem:studioItem
    }
}

export const getStudioMessage = (studioId,behavior) => {
    return {
        type: actionTypes.GET_STUDIO_MESSAGE,
        studioId: studioId,
        behavior:behavior

    }
}

export const getStudioMessageError = (behavior) => {
    return {
        type: actionTypes.GET_STUDIO_MESSAGE_ERROR,
        behavior:behavior
    }
}

export const getStudioMessageSuccess = (studioMessage,behavior) => {
    return {
        type: actionTypes.GET_STUDIO_MESSAGE_SUCCESS,
        studioMessage:studioMessage,
        behavior:behavior
    }
}

export const getSeats=(studioid)=>{
    return {
        type:actionTypes.GET_SEATS,
        studioid:studioid
    }
}

export const getSeatsSuccess=(seatsData)=>{
    return {
        type:actionTypes.GET_SEATS_SUCCESS,
        seatsData:seatsData
    }
}

export const getSeatError=()=>{
    return {
        type:actionTypes.GET_SEATS_ERROR
    }
}