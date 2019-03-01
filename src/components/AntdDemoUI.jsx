/**
 * Created by brady on 2019/3/1.
 */

import React from 'react'
import { Input, Button, List } from 'antd'

// 无状态组件 - 只有render()函数 - 可以使用函数方式定义
const AntdDemoUI = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <Input value={props.inputValue} placeholder="todo info" style={{width: '300px', marginRight: '10px', verticalAlign: 'top'}} onChange={props.handleInputChange} />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      <List style={{marginTop: '10px', width: '300px'}}
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (<List.Item onClick={() => props.handleItemDelete(index)}>{item.title}</List.Item>)}
      />
    </div>
  )
}

export default AntdDemoUI
