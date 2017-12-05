/**
 * Created by xudong on 17-11-14.
 */
import React,{Component} from 'react';

import '../style.css';

import LoginForm from './container/loginForm'
export default class login extends Component{
    render(){
        return(
            <div className="loginContent">
                <LoginForm/>
            </div>
        )
    }
}