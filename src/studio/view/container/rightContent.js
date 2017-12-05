/**
 * Created by xudong on 17-11-18.
 */
/**
 * Created by xudong on 17-11-18.
 */
import {connect} from 'react-redux';
import RightContent from '../component/rightContent';
const mapStateToProps = (state) => {
    // console.log(state.studioReducer);
    return {
        studioMessage:state.studioReducer.studioMessage,
        studioMessageStatus:state.studioReducer.studioMessageStatus,
        behavior:state.studioReducer.behavior,
        seatsData:state.studioReducer.seatsData,
        seatsStatus:state.studioReducer.seatsStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(RightContent);