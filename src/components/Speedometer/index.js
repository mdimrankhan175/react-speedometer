// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => {
        console.log(`previous state value ${prevState.speed}`)
        return {speed: prevState.speed + 10}
      })
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => {
        console.log(`previous state value ${prevState.speed}`)
        return {speed: prevState.speed - 10}
      })
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <div>
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button onClick={this.onIncrement} className="button">
              Accelerate
            </button>
            <button onClick={this.onDecrement} className="button">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
