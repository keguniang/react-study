import React from 'react'
// 在class创建的组件中，如果想使用外界传递过来的属性，不需要用props来接收，直接通过this.props.xxx使用即可
class Movie extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: 'class创建的组件'
        }
    }
    render() {
        // this表示当前组件的实例对象
        this.state.msg = '数据被改变了'
        return <div>这是movie组件---{this.props.name}---{this.state.msg}</div>
    }
}
export default Movie