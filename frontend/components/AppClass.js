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
        console.log(res.data)
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
        })
      })
  }

  handleChange = evt => {
    this.setState({
      ...this.state,
      email: evt.target.value
    })
  }

  handleReset = () => {
    this.setState({
      ...this.state,
      x: 2,
      y: 2,
      steps: 0,
      email: '',
      message: ''
    })
  }


  // constructor(props) {
  //   super(props);


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
  //       form: res.data.,
  //     })
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
  // }

  // state = initialState;

  // setActiveSq = (x, y) => {
  //   const grid = document.getElementsByClassName('square');

  //   for(let i = 0; i < grid.length; i++) {
  //     if(grid[i].classList.contains('active')) {
  //       grid[i].classList.remove('active');
  //     }
  //     if(grid[i].textContent) {
  //       grid[i].textContent = '';
  //     }
  //   }
  // }



  // onChange = evt => {
  //   const { value, steps } = evt.target;
  //   this.setState({ ...this.state, [steps]: value })
  // }

  // onSubmit = evt => {
  //   evt.preventDefault()
  //   const payload = { email: this.state.email };
  //   axios.post('http://localhost:9000/api/result', payload)
  //     .then(res => {
  //       console.log(res)
  //       this.setState({ ...this.state, form: res.data.email })
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }

  // reset = () => {
  //   this.setState({ 
  //     ...this.state,
  //     form: [{ x: 2, y: 2, steps: 0 }],
  //     email: '',
  //     error: '',
  //   })
  // }

  render() {
    // console.log(this.props)

    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x}, {this.state.y})</h3>
          <h3 id="steps">You moved {this.state.steps} time(s)</h3>
        </div>
        <div id="grid">

          <div className="square active">B</div>
          <div className="square active">B</div>
          <div className="square active">B</div>
          <div className="square active">B</div>
          <div className="square active">B</div>
          <div className="square active">B</div>
          <div className="square active">B</div>
          <div className="square active">B</div>
          <div className="square active">B</div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button onClick={this.onChange} id="left">LEFT</button>
          <button onClick={this.onChange} id="up">UP</button>
          <button onClick={this.onChange} id="right">RIGHT</button>
          <button onClick={this.onChange} id="down">DOWN</button>
          <button onClick={this.reset} id="reset">reset</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.email} id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
