/**
 * Created by brady on 2019/2/28.
 */

import React, {Component, Fragment} from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <Fragment>
        {/*<div className={this.state.show?'show':'hide'}>Hello</div>*/}
        <CSSTransition in={this.state.show} timeout={1000} classNames='fade' unmountOnExit onEntered={(el) => {el.style.color='blue'}} appear={true}>
          <div>Hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>Toggle</button>
      </Fragment>
    )
  }

  handleToggle = () => {
    this.setState((preState) => ({
      show: !preState.show
    }))
  }
}

export default App
