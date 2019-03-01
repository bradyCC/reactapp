/**
 * Created by brady on 2019/2/25.
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ToDoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  //组件是否更新
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.content !== this.props.content
  }

  render() {
    console.log('child')
    const { content } = this.props
    return (
      <li dangerouslySetInnerHTML={{__html: content}} onClick={this.handleClick}></li>
    )
    // return <li dangerouslySetInnerHTML={{__html: this.props.content}} onClick={this.handleClick}></li>
  }

  handleClick = () => {
    const { handleItemDelete, index } = this.props
    handleItemDelete(index)
    // this.props.handleItemDelete(this.props.index)
  }
}

// props验证
ToDoItem.propTyps = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  handleItemDelete: PropTypes.func,
  index: PropTypes.number
}

// props默认值
ToDoItem.defaultProps = {
  test: 'Hello World'
}

export default ToDoItem
