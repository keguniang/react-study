import React from 'react'

export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg:'父组件中的数据'
        }
    }
    render(){
        return <div>
            <h1>这是父组件</h1>
            <button onClick={this.changeMsg}>按钮</button>
            <hr/>
            {/* 父组件向子组件传值 */}
            <Son pmsg={this.state.msg}></Son>
        </div>
    }
    changeMsg = ()=>{
        this.setState({
            msg:'数据被改变'
        })
    }
}

class Son extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <h3>这是子组件----{this.props.pmsg}</h3>
        </div>
    }
    componentWillReceiveProps(nextProps){
        console.log('被触发了');
        console.log(nextProps.pmsg);
    }
}