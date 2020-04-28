import React from 'react'

export default class BindThis extends React.Component{
    constructor(){
        super()
        this.state = {
            msg:'state中的数据'
        }
        // 绑定this并传参方法2:在构造函数中绑定this并传参
        // 注意：bind函数返回的结果是：被改变this指向后的原函数的拷贝
        // 但是原函数的this指向并没有被改变，所以需要用函数接收
        // 相比于第一种的好处：只需要绑定一次就好了，不用像第一种，每次调用都需要绑定
        this.changeMsg2 = this.changeMsg2.bind(this,1,2)
    }
    render(){
        return <div>
            <h1>绑定this并传参的几种方法</h1>
            {/* 方法1：在组件的事件处理函数中，直接使用bind绑定this并传参 */}
            <button onClick={this.changeMsg.bind(this,1,2)}>绑定this并传参方法1</button>
            <button onClick={this.changeMsg2}>绑定this并传参方法2</button>
            <button onClick={()=> this.changeMsg3(1,2)}>绑定this并传参方法3</button>
            <h3>{this.state.msg}</h3>
        </div>
    }

    changeMsg(arg1,arg2){
        this.setState({
            msg:'绑定this并传参方法1'+'----'+arg1+'----'+arg2
        })
    }

    changeMsg2(arg1,arg2){
        this.setState({
            msg:'绑定this并传参方法2'+'----'+arg1+'----'+arg2
        })
    }

    changeMsg3(arg1,arg2){
        this.setState({
            msg:'绑定this并传参方法3'+'----'+arg1+'----'+arg2
        })
    }
}