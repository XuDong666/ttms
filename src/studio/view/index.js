/**
 * Created by xudong on 17-11-14.
 */
import React,{Component} from 'react';

import LeftBar from './container/leftBar';
import RightContent from './container/rightContent';
import '../style.css';

export default class login extends Component{
    render(){
        return(
            <div className="studioContent">
                <LeftBar/>
                <RightContent/>
            </div>
        )
    }
}