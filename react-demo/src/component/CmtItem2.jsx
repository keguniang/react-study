import React from 'react'
import cssobj from '@/css/CmtItem.scss'

// 评论项子组件 无状态子组件
export default function CmtItem(props) {
    return <div className={cssobj.cmtbox}>
        <h1 className={cssobj.title}>评论人：{props.user}</h1>
        <p className={cssobj.content}>评论内容：{props.content}</p>
    </div>
}