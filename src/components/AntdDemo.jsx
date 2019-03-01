/**
 * Created by brady on 2019/2/28.
 */

import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import store from '../store/index'
import { getInputValueAction, addListItemAction, deleteListItemAction } from "../store/actionCreators";

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
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <Input value={this.state.inputValue} placeholder="todo info" style={{width: '300px', marginRight: '10px', verticalAlign: 'top'}} onChange={this.handleInputChange} />
        <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        <List style={{marginTop: '10px', width: '300px'}}
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={() => this.handleItemDelete(index)}>{item}</List.Item>)}
        />
      </div>
    )
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
