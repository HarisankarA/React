import React from 'react'
import { useContext } from 'react'
import { countContext } from './UseContextReducer'

const ComponentA = () => {

  const countContext1 = useContext(countContext)

  return (
    <div>

        <button onClick={event => countContext1.countDispatch('increment')}>Increase</button>
        <button onClick={event => countContext1.countDispatch('Decrement')}>Decrement</button>
        <button onClick={event => countContext1.countDispatch('reset')}>Reset</button>
        
    </div>
  )
}

export default ComponentA