import React , { useState, useMemo, useRef } from 'react'
/* 自定义hooks 用于格式化数组将小写转成大写 */
function useFormatList(list) {
  return useMemo(() => list.map(item => {
    console.log(1111)
    return item.toUpperCase()
  }), [list])
  // return list.map(item => {
  //   console.log(1111)
  //   return item.toUpperCase()
  // })
}

function Wrapper() {
  let [count, setCount] = useState(0)
  let [list, setList] = useState([ 'aaa' , 'bbb' , 'ccc' ])
  let list1 = useRef([ '111' , '222' , '333' ]).current
  // let list1 = [ '111' , '222' , '333' ]
  return (
    <>
      <div>
        <span>count: {count}</span> <button onClick={() => setCount(count + 1)}>加count</button>
      </div>
      <hr />
      <button onClick={() => {setList([...list, 'ddd'])}}>改list</button>
      <ul>
        {
          useFormatList(list).map((item, index)=><div key={index} >{ item }</div>)
        }
      </ul>
      <ul>
        {
          useFormatList(list1).map((item, index)=><div key={index} >{ item }</div>)
        }
      </ul>
    </>
  )
}

export default Wrapper
