import React, { useState, useCallback } from 'react'
/* 
 *  1、配合memo，优化渲染次数
*/

class Test extends React.Component {
  render() {
    console.log("Test Render")
    return <div>
      <h1>{this.props.text}</h1>
      <button onClick={this.props.onClick}>改变文本</button>
    </div>
  }
}
const PurTest = React.memo(Test)
const Parent = () => {
  console.log("Parent Render")
  const [txt, setTxt] = useState(123)
  const [n, setN] = useState(0)
  const hhh = useCallback(()=> {
    setTxt(223)
  },[])

  return (
    <div>
      <PurTest text={txt} onClick={hhh}></PurTest>
      <input type="number"
        value={n}
        onChange={
          e => {
            setN(parseInt(e.target.value))
          }
        }></input>
    </div>
  )
}

/* 
 *  2、异步测量DOM的尺寸
*/
export function MeasureExample() {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  );
}

export default Parent