/**
 * Created by xudong on 17-11-18.
 */
import {connect} from 'react-redux';
import * as actions from '../../actions'
import LeftBar from '../component/leftBar';
const mapStateToProps = (state) => {

    return {
        account:state.loginReducer.account,
        userMessage:state.studioReducer.userMessage,
        studioItem:state.studioReducer.studioItem,
        studioMessage:state.studioReducer.studioMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserMessage:(account)=>{
            dispatch(actions.getUserMessage(account));
        },
        getStudioItem:()=>{
            dispatch(actions.getStudioItem());
        },
        getStudioMessage:(studioId,behavior)=>{
            dispatch(actions.getStudioMessage(studioId,behavior));
        },
        getSeats:(studioId)=>{
            dispatch(actions.getSeats(studioId));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeftBar);