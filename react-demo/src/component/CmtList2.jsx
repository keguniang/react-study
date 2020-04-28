import React from 'react'
import CmtItem from '@/component/CmtItem2'
import Cmtbox from '@/component/CmtBox'

import listObj from '@/css/cmtlist.scss'
console.log(listObj);

import bootcss from 'bootstrap/dist/css/bootstrap.css'
console.log(bootcss);
// 评论父组件
export default class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            CommentList: [//评论列表数据
                { id: 1, user: '张三', content: '哈哈，沙发' },
                { id: 2, user: '李四', content: '哈哈，沙发' },
                { id: 3, user: '王五', content: '哈哈，沙发' },
                { id: 4, user: '赵六', content: '哈哈，沙发' },
                { id: 5, user: '田七', content: '哈哈，沙发' },
            ]
        }
    }

    // 渲染前加载评论列表
    loadComment=()=>{
        var cmtList = JSON.parse(localStorage.getItem('cmtList') || '[]')
        this.setState({
            CommentList:cmtList
        })
    }

    UNSAFE_componentWillMount(){
        this.loadComment()
    }
    render() {
        var arr = this.state.CommentList.map(item =>
            <CmtItem key={item.id} {...item} />
        )

        return <div>
            {/* 发表评论区域 */}
            <Cmtbox reload={this.loadComment}/>
            {/* 第一个花括号是jsx语法，第二个花括号是对象 */}
            <h1 className={listObj.title + ' test'}>这是评论列表组件</h1>
            {/* 渲染评论列表区域 */}
            {arr}
        </div>
    }
}