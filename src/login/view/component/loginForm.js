/**
 * Created by xudong on 17-11-14.
 */
import React, {Component} from 'react';
import {browserHistory} from 'react-router';
export default class loginForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(ev) {
        ev.preventDefault();
        const message = {
            account:this.refs.account.value,
            password:this.refs.password.value,
        }
        this.props.onLogin(message);
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.loginStatus){
            return true
        }
        else {
            return false
        }
    }

    componentWillReceiveProps(nextProps) {
     browserHistory.push('studio');
    }

    render() {

        return (
            <div className="loginForm">
                <form action="#">
                    <h2>登录</h2>
                    <div>
                        <input type="text" id="account" ref="account" required/>
                    </div>
                    <div>
                        <input type="password" id="password" ref="password" required/>
                    </div>

                    <button id="submit" onClick={this.onSubmit}>登录</button>
                </form>
            </div>
        )
    }
}