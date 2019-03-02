/**
 * Created by brady on 2019/3/2.
 */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class ReactReduxDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div>
          <input type="text" value={this.props.inputValue} onChange={this.props.changeInputValue}/>
          <button>提交</button>
        </div>
      </Fragment>
    )
  }

  handleInputChange = (event) => {
    console.log(event.target.value)
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue (event) {
      const action = {
        type: 'change_input_value',
        value: event.target.value
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxDemo)
