import React from 'react'
import axios from 'axios';

export default class AppClass extends React.Component {
  // constructor(props) {
  //   super(props);

    state = {
      form: [{ x: 2, y: 2, steps: 0 }],
      email: '',
      error: '',
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

  onChange = evt => {
    const { value, steps } = evt.target;
    this.setState({ ...this.state, [steps]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()
    const payload = { email: this.state.email };
    axios.post('http://localhost:9000/api/result', payload)
      .then(res => {
        console.log(res)
        this.setState({ ...this.state, form: res.data.email })
      })
      .catch(err => {
        console.error(err);
      })
  }

  reset = () => {
    this.setState({ 
      ...this.state,
      form: [{ x: 2, y: 2, steps: 0 }],
      email: '',
      error: '',
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
          <button onClick={this.onChange} id="left">LEFT</button>
          <button onClick={this.onChange} id="up">UP</button>
          <button onClick={this.onChange} id="right">RIGHT</button>
          <button onClick={this.onChange} id="down">DOWN</button>
          <button id="reset" onClick={this.reset}>reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} value={this.state.email} id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
