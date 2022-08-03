import React, { useState, useEffect } from "react"

function Dialog(props) {
  // 原谅我用visible -1这种傻叉的方式先实现了, 重点不是在这里
  const { title, main, visible = -1 } = props
  const [visibleInner, setVisibleInner] = useState(false)
  const [ userInfo ] = useState({
    name: '前端胖头鱼'
  })

  const onHide = () => {
    setVisibleInner(false)
  }

  useEffect(() => {
    setVisibleInner(visible > 0)
  }, [ visible ])

  return (
    <div className="dialog" style={ { display: visibleInner ? 'block' : 'none' }}>
      <div className="dialog-mask" onClick={ onHide }></div>
      <div className="dialog-body">
        {/* 作用域插槽，当函数使用，并且把数据传递进去 */}
        { title(userInfo) }
        <div className="dialog-main">
          {/* 作用域插槽，当函数使用，并且把数据传递进去 */}
          { main(userInfo) }
        </div>
        <div className="dialog-footer">
          <div className="button-cancel" onClick={ onHide }>取消</div>
          <div className="button-confirm" onClick={ onHide }>确定</div>
        </div >
      </div >
    </div >
  )
}

export default function ScopeSlot() {
  const [visible, setVisible] = useState(-1)

  const onToggleVisible = () => {
    setVisible(Math.random())
  }

  return (
    <div className="slot">
      <button onClick={ onToggleVisible }>切换dialog</button>
      <Dialog
        visible={visible}
        // 通过函数来实现插槽
        title={ () => <div className="dialog-title">作用域插槽</div> }
        // 接收userInfo数据
        main={ (userInfo) => <div className="slot-body">你好{ userInfo.name }</div> }
      >
      </Dialog>
    </div>
  )
}