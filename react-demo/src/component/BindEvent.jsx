import React from 'react'

export default class BindEvent extends React.Component{
    constructor(){
        super()
        // 私有数据
        this.state = {
            msg:'哈哈'
        }
    }
    showMsg(){
        console.log(this);
        // this.state.msg = 'kkkk'
        // 该方法是异步执行的，第二个参数是回调函数
        this.setState({
            msg:'123'
        },function(){console.log(this.state.msg);})
    }
    txtChange(e){
        this.setState({
            msg:e.target.value
        })
    }
    render(){
        return <div>
            {/* 组件上绑定事件 */}
            {this.state.msg}
            <hr/>
            <button onClick={()=>this.showMsg()}>按钮</button>
            <input type="text" value={this.state.msg} onChange={(e)=>{this.txtChange(e)}}/>
        </div>
    }
}