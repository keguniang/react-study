console.log('no');
// 1. 导入的时候，名字不可以更改该
import React from 'react'//创建组件和虚拟DOM和生命周期
import ReactDom from 'react-dom'//将组件和虚拟DOM放到页面展示

// 若不做单独配置的话，不能省略jsx后缀名
import Hello from '@/component/Hello'
import Movie from '@/component/Movie'
// 2.创建虚拟DOM元素
/**
 * 参数1：创建元素的类型 字符串
 * 参数2：DOM元素的属性，是一个对象或null
 * 参数3：该DOM元素的子节点
 * 参数n：其他子节点
 * <h1 id='myh1' title='this is a h1'>这是我的h1</h1>
 */
// const myh1= React.createElement('h1',{
//     id:'myh1',
//     title:'this is a h1'
// },'这是我的h1')

// const mydiv = React.createElement('div',null,'这是一个div',myh1)

const mydiv = <div id='mydiv'>这是一个div</div>
// 在JS中，混合写入HTML的语法，叫做JSX语法，符合xml规范的JS语法
// 注意JSX语法的本质，还是在运行的时候，被转换成了React.createElement形式来执行

var strArr = ['1','2','3']
// react中，需要把key添加给被循环直接控制的元素
strArr = strArr.map(item => <h1 key={item}>{item}</h1>)



/**使用ReactDom.render把虚拟DOM渲染到页面上
 * 参数1：要渲染的虚拟DOM元素
 * 参数2：被挂载的DOM容器
 */
// 因为indx.js会被打包到main.js文件，该文件会被自动放到index.html文件中，所以可以得到app 元素
ReactDom.render(<div>
    {strArr}
    {/* 直接把组件的名称，以标签的形式丢在页面上即可 */}
    <Hello name='aaa'></Hello>
    {/* 这里放了Movie标签实际上就是放了一个movie实例 */}
    <Movie name='fff'/>
</div>,document.getElementById('app'))