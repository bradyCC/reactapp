/**
 * Created by brady on 2019/3/2.
 */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getInputValueAction, addItemAction, deleteItemAction } from '../store/react-redux/actionCreators'


class ReactReduxDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { inputValue, list, changeInputValue, handleClick, handleDelete } = this.props
    return (
      <Fragment>
        <div>
          <input type="text" value={inputValue} onChange={changeInputValue}/>
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li onClick={handleDelete(index)} key={index}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange = (event) => {
    console.log(event.target.value)
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue (event) {
      dispatch(getInputValueAction(event.target.value))
    },
    handleClick () {
      dispatch(addItemAction())
    },
    handleDelete (index) {
      dispatch(deleteItemAction(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxDemo)
