/**
 * Created by xudong on 17-11-17.
 */
import React, {Component} from 'react';

export default class leftBar extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.getUserMessage(this.props.account);
        this.props.getStudioItem();

    }

    componentWillReceiveProps(nextProps) {
        this.account=nextProps.userMessage.account;
        this.headImage= nextProps.userMessage.imageUrl;
        this.name=nextProps.userMessage.name;
        this.studioItem=nextProps.studioItem;
    }
    querryShowStudio(studioId){
        this.props.getStudioMessage(studioId,'querry');
        this.props.getSeats(studioId);
    }

    updateShowStudio(studioId){
        this.props.getStudioMessage(studioId,'update');
        this.props.getSeats(studioId);
    }
    render() {
        // console.log(this.props);
        const querryStudioItems=[];
        for(let i in this.studioItem){
            querryStudioItems.push(<li onClick={this.querryShowStudio.bind(this,this.studioItem[i].studioId)}>{this.studioItem[i].studioName}</li>);
        }
        const updateStudioItems=[];
        for(let i in this.studioItem){
            updateStudioItems.push(<li onClick={this.updateShowStudio.bind(this,this.studioItem[i].studioId)}>{this.studioItem[i].studioName}</li>)
            // console.log(i);
        }


        return <div className="leftBar">
            <div className="logo">
                <h1>Admin</h1>
            </div>
            <div className="sideNav">
                <div className="userMessage">
                    <img src={this.headImage} alt="头像无法显示"/>
                    <span>{this.name}</span>
                    <span className="glyphicon glyphicon-user"></span>
                    <span className="glyphicon glyphicon-envelope"></span>
                    <span className="glyphicon glyphicon-cog"></span>
                    <span className="glyphicon glyphicon-log-out"></span>
                </div>
                <div className="addStudio"></div>
                <div className="delete"></div>
                <div className="querryStudio">
                    <span>查看演出厅</span>
                    <ul>
                        {querryStudioItems}
                    </ul>
                </div>
                <div className="querryStudio updateStudio">
                    <span>修改演出厅</span>
                    <ul>
                        {updateStudioItems}
                    </ul>
                </div>
                <div className="deleteStudio">
                    <span>删除演出厅</span>
                </div>
                <div className="addStudio">
                    <span>增加演出厅</span>
                </div>
            </div>
        </div>
    }
}