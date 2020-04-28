import React from 'react'
import CmtItem from '@/component/CmtItem'
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
    render() {
        var arr = this.state.CommentList.map(item =>
            <CmtItem key={item.id} {...item} />
        )
        return <div>
            {/* 第一个花括号是jsx语法，第二个花括号是对象 */}
            <h1 style={{ color: 'red', fontSize: '35px',fontWeight:200,textAlign:'center' }}>这是评论列表组件</h1>
            {arr}
        </div>
    }
}