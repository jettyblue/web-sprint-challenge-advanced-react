import React, { useState } from 'react'
import axios from 'axios';

export default function AppFunctional(props) {
  const [grid, setGrid] = useState('');

  // const posArray = [
  //   [0, 0, 0],
  //   [0, 0, 0],
  //   [0, 0, 0]
  // ]

  // posArray[2][0]

  const handleChange = (e) => {
    setGrid(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddTodo(grid);
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
          <input id="email" onChange={handleChange} type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    </>
  )
}


