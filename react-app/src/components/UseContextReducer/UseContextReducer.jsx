import React, { useReducer } from 'react'
import ComponentA from './ComponentA'

export const countContext = React.createContext()


const initialstate = 0

    const Reducer = (currentstate, action) => {
      
      if (action === 'increment')
      return currentstate + 1
    
      else if (action === 'Decrement')
      return (currentstate - 1)

      else if (action === 'reset')
      return (initialstate)

    }
    
    
  const UseContextReducer = () => {

  const [counter, dispatchCounter] = useReducer(Reducer, initialstate)

  return (

    <div>
        
        <h1>Counter ConReducer: {counter}</h1>

        <countContext.Provider value = {{
            countState : counter,
            countDispatch: dispatchCounter
          }
        }>
          <ComponentA></ComponentA>
        </countContext.Provider>

    </div>
  )
}

export default UseContextReducer