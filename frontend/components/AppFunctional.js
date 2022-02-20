import React, { useState } from 'react'
import axios from 'axios';

export default function AppFunctional(props) {
  const [state, setState] = useState({
    x: 2,
    y: 2,
    steps: 0,
    email: '',
    message: ''
  })

  // handle change, submit, reset
    const handleSubmit = evt => {
      evt.preventDefault();
      const payload = {
        x: state.x,
        y: state.y,
        steps: state.steps,
        email: state.email
      }
      axios.post('http://localhost:9000/api/result', payload)
        .then(res => {
          setState({
            ...state,
            email: '',
            message: res.data.message
          })
        })
        .catch(err => {
          state.email !== '' & state.email !== 'foo@bar.baz' ?
          setState({
            ...state,
            message: 'Ouch: email must be a valid email'
          }) :
          state.email === 'foo@bar.baz' ?
          setState({
            ...state,
            email: '',
            message: err.response.data.message
          }) :
          setState({
            ...state,
            message: 'Ouch: email is required'
          });
        });
    }

    const handleChange = evt => {
      setState({
        ...state, email: evt.target.value
      });
    }

    const handleReset = () => {
      setState({
        ...state,
        x: 2,
        y: 2,
        steps: 0,
        message: ''
      });
    }

    // axis movement
    const handleXAdd = () => {
      state.x <= 2 ?
      setState({
        ...state,
        x: state.x + 1,
        steps: state.steps + 1,
        message: ''
      }) :
      setState({ ...state, message: "You can't go right" });
    }

    const handleXMinus = () => {
      state.x >= 2 ?
      setState({
        ...state,
        x: state.x - 1,
        steps: state.steps + 1,
        message: ''
      }) :
      setState({ ...state, message: "You can't go left" });
    }

    const handleYAdd = () => {
      state.y >= 2 ?
      setState({
        ...state,
        y: state.y - 1,
        steps: state.steps + 1,
        message: ''
      }) :
      setState({ ...state, message: "You can't go up" });
    }

    const handleYMinus = () => {
      state.y <= 2 ?
      setState({
        ...state,
        y: state.y + 1,
        steps: state.steps + 1,
        message: ''
      }) :
      setState({ ...state, message: "You can't go down" });
    }

  return (
    <>
      <div id="wrapper" className={props.className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({state.x}, {state.y})</h3>
          <h3 id="steps">You moved {state.steps} {state.steps === 1 ? 'time' : 'times'} times</h3>
        </div>
        <div id="grid">
          <div className= {state.x === 1 && state.y === 1 ? "square active" : "square"}>
              {state.x === 1 && state.y === 1 ? "B" : ''}
            </div>

            <div className= {state.x === 2 && state.y === 1 ? "square active" : "square"}>
              {state.x === 2 && state.y === 1 ? "B" : ''}
            </div>

            <div className= {state.x === 3 && state.y === 1 ? "square active" : "square"}>
              {state.x === 3 && state.y === 1 ? "B" : ''}
            </div>

            <div className= {state.x === 1 && state.y === 2 ? "square active" : "square"}>
              {state.x === 1 && state.y === 2 ? "B" : ''}
            </div>

            <div className= {state.x === 2 && state.y === 2 ? "square active" : "square"}>
              {state.x === 2 && state.y === 2 ? "B" : ''}
            </div>

            <div className= {state.x === 3 && state.y === 2 ? "square active" : "square"}>
              {state.x === 3 && state.y === 2 ? "B" : ''}
            </div>

            <div className= {state.x === 1 && state.y === 3 ? "square active" : "square"}>
              {state.x === 1 && state.y === 3 ? "B" : ''}
            </div>

            <div className= {state.x === 2 && state.y === 3 ? "square active" : "square"}>
              {state.x === 2 && state.y === 3 ? "B" : ''}
            </div>

            <div className= {state.x === 3 && state.y === 3 ? "square active" : "square"}>
              {state.x === 3 && state.y === 3 ? "B" : ''}
            </div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={handleChange}>LEFT</button>
          <button id="up">UP</button>
          <button id="right">RIGHT</button>
          <button id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    </>
  )
}


