import React from 'react'

export default class CmtBox extends React.Component{
    render(){
        return <div>
            <label >评论人：</label><br/>
            <input ref='user'></input><br/>
            <label >评论内容：</label><br/>
            <textarea ref='content'></textarea><br/>
            <button className='btn btn-primary' onClick={this.submitComment}>提交</button>
        </div>
    }

    submitComment = ()=>{
        console.log(this.refs.user.value);
        var obj = {user:this.refs.user.value,content:this.refs.content.value}
        var cmtList = JSON.parse(localStorage.getItem('cmtList') || '[]')
        cmtList.unshift(obj)
        localStorage.setItem('cmtList',JSON.stringify(cmtList))
        // 触发父组件中的刷新函数
        this.props.reload()
    }
}