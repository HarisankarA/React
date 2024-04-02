import React from 'react'
import FunctionCreation from './FunctionCreation'

const SupportFunction = ({data}) => {

  return (

    <div>
        <button onClick={() => data(10,20)}>Log Data</button>
    </div>
  )
}

export default SupportFunction