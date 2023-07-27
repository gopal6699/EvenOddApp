import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber)
    this.setState(oldState => ({count: oldState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const value = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <h1 className="count-heading">Count {count}</h1>
        <h1 className="heading">Count is {value}</h1>
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="description">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
