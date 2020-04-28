import React from 'react'
// prop-types包职能单一，只提供了一些常见的数据类型，用于做类型校验的
import ReactTypes from 'prop-types'
export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count:props.initCount
        }
    }
    // 设置props的默认值
    // 用静态的defaultProps睡醒来设置组件的默认属性值
    static defaultProps = {
        initCount: 0//如果外界没有传递initCount，那么便使用自己的默认值
    }

    // 静态的propsType对象，可以对外界传递过来的props做类型校验
    // 注意：如果要做校验，必须安装react提供的第三方包叫做props-types
    // props-types在15.x之前，并没有单独抽离出来，和react包在一起，v16.x之后单独抽离出来了一个包
    static propTypes = {
        initCount:ReactTypes.number//使用prop-types包，来定义initCount的值类型
    }

    // 组件还未挂在到页面中,内存中的虚拟DOM也未创建
    // 不能操作页面上的DOM，能操作props和state和自己创建的方法，相当于vue中的created
    UNSAFE_componentWillMount(){
        // console.log(document.getElementById('nyh3'));
    }
    render() {
        // 在return 之前，虚拟DOM还未开始创建

        // 运行阶段调用也是旧的数值
        console.log(this.refs.h3 && this.refs.h3.innerHTML);
        return <div>
            <h1>这是Counter计数组件</h1>
            <button onClick={this.increment}>+1</button>
            <hr />
            <h3 id='nyh3' ref='h3'> 现在的数值是：{this.state.count}</h3>
        </div>
        // 虚拟DOM创建好了，但还未挂载到页面中
        //  console.log(document.getElementById('nyh3'));
    }

    increment = () => {
        this.setState({
            count:this.state.count+1
        })
    }

    // 操作DOM，最早可以在componentDidMount进行，相当于vue中的mounted
    componentDidMount(){
        // console.log(document.getElementById('nyh3'));
    }

    // 运行阶段
    // 判断组件是否需要被更新
    shouldComponentUpdate(nextProps,nextState){
        // 1. 在其中要求必须返回一个布尔值
        // 2. 若返回的是false，则不会运行下边的钩子函数，后续的render函数不会被调用，因此页面就不会被更新，但是组件state的状态会被修改

        // 需求：count偶数更新页面，奇数不更新页面
        // 经过打印测试发现，在shouldComponentUpdate中，通过this.state.count获取到的是上一次的旧数据
        // console.log(this.state.count);
        // return this.state.count % 2===0?true:false
        // return nextState.count % 2===0?true:false
        return true
    }

    // 组件将要更新，内存中的虚拟DOM和页面上的DOM是旧的
    componentWillUpdate(){

    }
    componentDidUpdate(){
        console.log(this.refs.h3.innerHTML);
    }
}