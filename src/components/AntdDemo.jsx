/**
 * Created by brady on 2019/2/28.
 */

import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]

class AntdDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <Input placeholder="todo info" style={{width: '300px', marginRight: '10px', verticalAlign: 'top'}} /><Button type="primary">提交</Button>
        <List style={{marginTop: '10px', width: '300px'}}
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default AntdDemo
