/**
 * Created by brady on 2019/3/1.
 */

import React, {Component} from 'react'
import { Input, Button, List } from 'antd'

class AntdDemoUI extends Component {
  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <Input value={this.props.inputValue} placeholder="todo info" style={{width: '300px', marginRight: '10px', verticalAlign: 'top'}} onChange={this.props.handleInputChange} />
        <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        <List style={{marginTop: '10px', width: '300px'}}
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
              bordered
              dataSource={this.props.list}
              renderItem={(item, index) => (<List.Item onClick={() => this.props.handleItemDelete(index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default AntdDemoUI
