import React from 'react'

import style from './style'

// 评论项子组件 无状态子组件
export default function CmtItem(props) {
    return <div style={style.item}>
        <h1 style={style.user}>评论人：{props.user}</h1>
        <p style={style.content}>评论内容：{props.content}</p>
    </div>
}