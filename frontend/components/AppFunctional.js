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
  // posArray[2][0]

  const handleChange = evt => {
    setState({
      ...state, email: evt.target.value
    })
  }

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
    
  // console.log(AppFunctional);
  return (
    <>
      <div id="wrapper" className={props.className}>
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


