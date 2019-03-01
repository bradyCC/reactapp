/**
 * Created by brady on 2019/2/28.
 */

import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import store from '../store/index'

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
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }

  handleInputChange = (event) => {
    const action = {
      type: 'change_input_value',
      value: event.target.value
    }
    store.dispatch(action)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  handleBtnClick = () => {
    const action = {
      type: 'add_list_item'
    }
    store.dispatch(action)
  }
}

export default AntdDemo
