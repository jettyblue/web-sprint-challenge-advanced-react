import React from 'react'
import axios from 'axios';

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xoffset: 0,
      yoffset: 0,
      delta: 10
    }
  }

  // moveSqDown = () => {
  //   this.setState({ yoffset: this.state.yoffset + this.state.delta });
  // }

  // moveSqUp = () => {
  //   this.setState({ yoffset: this.state.yoffset - this.state.delta });
  // }

  // moveSqRight = () => {
  //   this.setState({ xoffset: this.state.xoffset + this.state.delta });
  // }

  // moveSqLeft = () => {
  //   this.setState({ xoffset: this.state.xoffset - this.state.delta });
  // }

  // componentDidMount() {
  //   axios.get('http://localhost:9000/api/result')
  //   .then(res => {
  //     console.log(res);
  //     this.setState({
  //       ...this.state,
  //       todos: res.data.data,
  //     })
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
  // }

  reset = () => {
    this.setState({
      ...this.state
    })
  }

  render() {
    // console.log(this.props)

    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved 0 times</h3>
        </div>
        <div id="grid">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square active">B</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={this.moveSqLeft}>LEFT</button>
          <button id="up" onClick={this.moveSqUp}>UP</button>
          <button id="right"onClick={this.moveSqRight}>RIGHT</button>
          <button id="down" onClick={this.moveSqDown}>DOWN</button>
          <button id="reset" onClick={this.reset}>reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
