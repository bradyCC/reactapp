/**
 * Created by brady on 2019/2/25.
 */

import React, {Component, Fragment} from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <label htmlFor="insertArea">输入内容</label>
        <input type="text" value={this.state.inputValue} id="insertArea" onChange={this.handleInputChange} />
        {/*<input type="text" value={this.state.inputValue} onChange={this.handleInputChangeBind.bind(this)} />*/}
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          {
            this.getToDoItem()
            // this.state.list.map((item, index) => {
              // return (
              //   <Fragment>
              //     {/*<li key={index} onClick={() => this.handleItemDelete(index)}>{item}</li>*/}
              //     {/*<li key={index} onClick={() => this.handleItemDelete(index)} dangerouslySetInnerHTML={{__html: item}}></li>*/}
              //   </Fragment>
              // )
              // return <ToDoItem key={index} content={item} index={index} handleItemDelete={this.handleItemDelete} />
            // })
          }
        </ul>
      </Fragment>
    )
  }

  // handleInputChangeBind(event) {
  //   this.setState({
  //     inputValue: event.target.value
  //   })
  // }

  handleInputChange = event => {
    const value = event.target.value
    this.setState(() => ({
      inputValue: value
    }))
    // this.setState({
    //   inputValue: event.target.value
    // })
  }

  handleBtnClick = () => {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }

  handleItemDelete = (index) => {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    //   list: list
    // })
  }

  getToDoItem = () => {
    return this.state.list.map((item, index) => {
      return (
        <ToDoItem key={index} content={item} index={index} handleItemDelete={this.handleItemDelete}/>
      )
    })
  }

}

export default ToDoList
