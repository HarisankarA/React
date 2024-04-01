import React from 'react'
import { useState } from 'react'

const UseState = () => {

    const [counter, setCounter] = useState(0)

    const increment = () => {

        setCounter(counter+1)
    }

    const decrement = () => {

        setCounter (counter-1)
    }

  return (
    <div>
        <h2>UseState</h2>
        {counter} <br />

        <button onClick={event =>increment()}>Increment</button>

        <button onClick={event =>decrement()}>Increment</button>
    </div>
  )
}

export default UseState