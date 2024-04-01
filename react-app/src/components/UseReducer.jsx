import React from 'react'
import { useReducer } from 'react'

const iniatialState = 0

const Reducer = (currentState, action) => {

  if (action === 'Increment')

  return currentState + 1

  else if (action === 'Decrese')

  return currentState - 1

}

const UseReducer = () => {

    const [counter, dispatchCounter] = useReducer(Reducer, iniatialState)

  return (
    <div>
        <h2>UseReducer</h2>

        <button style={{backgroundColor : "green", fontSize:"13px"}} onClick={event => dispatchCounter("Increment")} >Increase</button>

        <button  style = {{backgroundColor:"red", fontSize:'13px'}} onClick={event=> dispatchCounter("Decrese")}>Decrese</button> <br />

        {
        counter > 10 ? 
        <p style = {{fontSize : "30px"}}>{counter}</p>
        :<p style = {{fontSize : "20px"}}>{counter}</p>
        }

    </div>
  )
}

export default UseReducer