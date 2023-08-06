import './index.css'
import {Component} from 'react'

class Counter extends Component {
  state = {count: 0}
  increment = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  decrement = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p class="count">{count}</p>
        <div>
          <button className="button" onClick={this.increment}>
            increment
          </button>
          <button className="button" onClick={this.decrement}>
            decrement
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
