/**
 * Created by xudong on 17-11-14.
 */
import {connect} from 'react-redux';
import LoginForm from '../component/loginForm';
import * as actions from '../../actions';

const mapStateToProps = (state) => {

    return {
        account: state.loginReducer.account,
        loginStatus: state.loginReducer.loginStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (message) => {
            dispatch(actions.loginIn(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);