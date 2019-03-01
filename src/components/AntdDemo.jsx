/**
 * Created by brady on 2019/2/28.
 */

import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from '../store/index'
import { getInputValueAction, addListItemAction, deleteListItemAction } from "../store/actionCreators";
import AntdDemoUI from "./AntdDemoUI";

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ]

class AntdDemo extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
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

  handleInputChange = (event) => {
    store.dispatch(getInputValueAction(event.target.value))
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  handleBtnClick = () => {
    store.dispatch(addListItemAction())
  }

  handleItemDelete = (index) => {
    store.dispatch(deleteListItemAction(index))
  }
}

export default AntdDemo
