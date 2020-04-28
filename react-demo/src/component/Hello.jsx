import React from 'react'

// 第一种创建组件的方式
function Hello(props) {
    // 这里props属性是只读的
    // props.name = 'fff'
    // 在组件中，必须返回一个合法的 JSX虚拟DOM元素
return <div>这是hello组件---{props.name}</div>  
}

// 把组件暴露出去
export default Hello