/**
 * Created by xudong on 17-11-17.
 */
import React, {Component} from 'react';

export default class rightContent extends Component {
    constructor(props) {
        super(props);
        this.studioMessage = this.props.studioMessage;
        this.behavior = this.props.behavior;
        this.seatsData = this.props.seatsData;
        this.seatsStatus=this.props.seatsStatus;
    }

    componentWillReceiveProps(nextProps) {
        this.studioMessage = nextProps.studioMessage;
        this.behavior = nextProps.behavior;
        this.seatsData = nextProps.seatsData;
        this.seatsStatus=nextProps.seatsStatus;

        if(this.seatsStatus){
            this.seats=[];
            this.damageSeatSum=0;
            for (let row = 0; row <= this.seatsData[this.seatsData.length-1].row; row++) {
                for (let col = 0; col <= this.seatsData[this.seatsData.length-1].col; col++) {
                    this.damageSeatSum+=this.seatsData[this.seatsData.length-1].status?0:1;
                    this.seats.push(<button className="seat"></button>);
                }
                this.seats.push(<br/>);
            }
        }
        // console.log(this.seats);
    }
    updateStudio(){
        alert(1);
    }

    render() {

        if(this.behavior==='querry'){
            return <div className="rightContent">
                <div className="topContent">

                </div>
                <div className="bottomContent">
                    <div className="studioView">
                        <p>屏幕</p>

                        {this.seats}
                    </div>
                    <div className="studioIntro">
                        <h2>{this.studioMessage.studioName}</h2>
                        <p>编号：{this.studioMessage.studioId}</p>
                        <p><span>行:{this.studioMessage.row}</span><span>列:{this.studioMessage.col}</span></p>
                        <p>状态：{this.studioMessage.status?'可用':'不可用'}</p>
                        <p>损坏座位数量：{this.damageSeatSum}</p>
                    </div>
                </div>
            </div>
        }
        else if(this.behavior==='update'){
            return <div className="rightContent">
                <div className="topContent">

                </div>
                <div className="bottomContent">
                    <div className="studioView">
                        <p>屏幕</p>

                        {this.seats}
                    </div>
                    <div className="studioIntro">
                        <h2>{this.studioMessage.studioName}</h2>
                        <p>编号：{this.studioMessage.studioId}</p>
                        <p><span>行:{this.studioMessage.row}</span><span>列:{this.studioMessage.col}</span></p>
                        <p>状态：{this.studioMessage.status?'可用':'不可用'}</p>
                        <p>损坏座位数量：{this.damageSeatSum+1}</p>
                        <button className="updatebtn" onClick={this.updateStudio.bind(this)}>修改演出厅信息</button>
                    </div>
                </div>
            </div>
        }
        else {
            return <div className="rightContent">
                <div className="topContent">
                    帅比栋哥default
                </div>
                <div className="bottomContent">

                </div>
            </div>
        }

    }
}