// import React, { Component, createContext, useState, useContext } from 'react'
import React, { createContext, useState, useContext } from 'react'
import './index.css'

const MyContext = createContext()
function App() {
  let [userName, setUserName] = useState('张三')
  function changeName() {
    setUserName(userName + '!')
  }
  return (
    <div className="App">
      <p>当前我的名字：{ userName }</p>
      <button onClick={changeName}>改名字</button>
      <MyContext.Provider value={{userName, changeName}}>
        <B>
          我是内容
          <div>我是div<span>我是span</span></div>
          <C></C>
        </B>
      </MyContext.Provider>
    </div>
  );
}
function B(props) {
  const { userName, changeName } = (useContext(MyContext))
  console.log(Array.isArray(props.children), React.Children.toArray(props.children))
  console.log(Object.prototype.toString.call(props.children), props.children.sort)
  return <div className="child">
    <h3>我是B组件 <button onClick={changeName}>改父组件名字</button></h3>
    我接收到的context数据是：{userName}
  </div>
}
function C() {
  return (
    <div>我是c组件</div>
  )
}


/* class App extends Component {
  state = {
    userName: '张三'
  }
  changeName = () => {
    this.setState(({userName}) => ({userName: userName + '!'}))
  }
  render() {
    console.log(111)
    return (
      <div className="App">
        <p>当前我的名字：{ this.state.userName }</p>
        <button onClick={ this.changeName }>改名字</button>
        <MyContext.Provider value={ {userName: this.state.userName, changeName: this.changeName} }>
          <B></B>
        </MyContext.Provider>
      </div>
    )
  }
} */

/* class B extends Component {
  // static contextType = MyContext
  render() {
    console.log(222, this.context)
    return (
      <MyContext.Consumer>
        {
          ({changeName, userName}) => (
            <div className="child">
              <h3>我是B组件 <button onClick={changeName}>改父组件名字</button></h3>
              我接收到的context数据是：{userName}
            </div>
          )
        }
      </MyContext.Consumer>
    )
  }
} */

export default App;
