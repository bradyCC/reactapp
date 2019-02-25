/**
 * Created by brady on 2019/2/25.
 */

import React, {Component} from 'react'

class ToDoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
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

export default ToDoItem
