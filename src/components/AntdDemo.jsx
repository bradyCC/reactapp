/**
 * Created by brady on 2019/2/28.
 */

import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from '../store/index'
import { getInputValueAction, addListItemAction, deleteListItemAction, initStoreListActon } from "../store/actionCreators";
import AntdDemoUI from "./AntdDemoUI";
import axios from 'axios'

class AntdDemo extends Component {
  constructor(props) {
    super(props)
    //将store的值赋值给state
    this.state = store.getState()
    //监听store变化, 执行相应操作
    store.subscribe(this.handleStoreChange)
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data)
        store.dispatch(initStoreListActon(res.data))
      })
      .catch(() => {alert('error')})
  }

  render() {
    return <AntdDemoUI
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange={this.handleInputChange}
      handleStoreChange={this.handleStoreChange}
      handleBtnClick={this.handleBtnClick}
      handleItemDelete={this.handleItemDelete} />
  }

  //input值改变时, 调用store.dispatch执行对应的action, 执行对应的reducer, 返回新的state, 通知store修改state
  handleInputChange = (event) => {
    store.dispatch(getInputValueAction(event.target.value))
  }

  //当store中的值变化时, 更新组件state的值
  handleStoreChange = () => {
    this.setState(store.getState())
  }

  //点击提交时, 调用store.dispatch执行对应的action, 执行对应的reducer, 返回新的state, 通知store修改state
  handleBtnClick = () => {
    store.dispatch(addListItemAction())
  }

  //点击item时, 调用sotre.dispatch执行对应的action, 执行对应的reducer, 返回新的state通知store修改state
  handleItemDelete = (index) => {
    store.dispatch(deleteListItemAction(index))
  }
}

export default AntdDemo
