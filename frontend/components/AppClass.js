import React from 'react'
import axios from 'axios';

export default class AppClass extends React.Component {
  state = {
    x: 2,
    y: 2,
    steps: 0,
    email: '',
    message: ''
  }

  // handle change, submit, reset
  handleSubmit = evt => {
    evt.preventDefault()
    const payload = {
      x: this.state.x,
      y: this.state.y,
      steps: this.state.steps,
      email: this.state.email
    }
    axios.post('http://localhost:9000/api/result', payload)
      .then(res => {
        this.setState({
          ...this.state,
          email: '',
          message: res.data.message
        })
      })
      .catch(err => {
        console.log(err.response)
        this.state.email !== '' & this.state.email !== 'foo@bar.baz' ?
        this.setState({
          ...this.state, message: 'Ouch: email must be a valid email'
        }) :
        this.state.email === 'foo@bar.baz' ?
        this.setState({
          ...this.state,
          email: '',
          message: err.response.data.message
        }) :
        this.setState({
          ...this.state,
          message: 'Ouch: email is required'
        });
      });
  }

  handleChange = evt => {
    this.setState({
      ...this.state, email: evt.target.value
    });
  }

  handleReset = () => {
    this.setState({
      ...this.state,
      x: 2,
      y: 2,
      steps: 0,
      email: '',
      message: ''
    });
  }

  // axis movement
  handleXAdd = () => {
    this.state.x <= 2 ?
    this.setState({
      ...this.state,
      x: this.state.x + 1,
      steps: this.state.steps + 1,
      message: ''
    }) :
    this.setState({ ...this.state, message: "You can't go right" });
  }

  handleXMinus = () => {
    this.state.x >= 2 ?
    this.setState({
      ...this.state,
      x: this.state.x -1,
      steps: this.state.steps + 1,
      message: ''
    }) :
    this.setState({ ...this.state, message: "You can't go left" });
  }

  handleYAdd = () => {
    this.state.y >= 2 ?
    this.setState({
      ...this.state,
      y: this.state.y -1,
      steps: this.state.steps + 1,
      message: ''
    }) :
    this.setState({ ...this.state, message: "You can't go up" });
  }

  handleYMinus = () => {
    this.state.y <= 2 ?
    this.setState({
      ...this.state,
      y: this.state.y + 1,
      steps: this.state.steps + 1,
      message: ''
    }) :
    this.setState({ ...this.state, message: "You can't go down" });
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>

        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x}, {this.state.y})</h3>
          <h3 id="steps">You moved {this.state.steps} {this.state.steps === 1 ? 'time' : 'times'}</h3>
        </div>

        <div id="grid">
          <div className= {this.state.x === 1 && this.state.y === 1 ? "square active" : "square"}>
            {this.state.x === 1 && this.state.y === 1 ? "B" : ''}
          </div>

          <div className= {this.state.x === 2 && this.state.y === 1 ? "square active" : "square"}>
            {this.state.x === 2 && this.state.y === 1 ? "B" : ''}
          </div>

          <div className= {this.state.x === 3 && this.state.y === 1 ? "square active" : "square"}>
            {this.state.x === 3 && this.state.y === 1 ? "B" : ''}
          </div>

          <div className= {this.state.x === 1 && this.state.y === 2 ? "square active" : "square"}>
            {this.state.x === 1 && this.state.y === 2 ? "B" : ''}
          </div>

          <div className= {this.state.x === 2 && this.state.y === 2 ? "square active" : "square"}>
            {this.state.x === 2 && this.state.y === 2 ? "B" : ''}
          </div>

          <div className= {this.state.x === 3 && this.state.y === 2 ? "square active" : "square"}>
            {this.state.x === 3 && this.state.y === 2 ? "B" : ''}
          </div>

          <div className= {this.state.x === 1 && this.state.y === 3 ? "square active" : "square"}>
            {this.state.x === 1 && this.state.y === 3 ? "B" : ''}
          </div>

          <div className= {this.state.x === 2 && this.state.y === 3 ? "square active" : "square"}>
            {this.state.x === 2 && this.state.y === 3 ? "B" : ''}
          </div>

          <div className= {this.state.x === 3 && this.state.y === 3 ? "square active" : "square"}>
            {this.state.x === 3 && this.state.y === 3 ? "B" : ''}
          </div>
        </div>

        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button onClick={this.handleXMinus} id="left">LEFT</button>
          <button onClick={this.handleYAdd} id="up">UP</button>
          <button onClick={this.handleXAdd} id="right">RIGHT</button>
          <button onClick={this.handleYMinus} id="down">DOWN</button>
          <button onClick={this.handleReset} id="reset">reset</button>
        </div>

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.email} id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
