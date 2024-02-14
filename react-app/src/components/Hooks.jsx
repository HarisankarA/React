import React from 'react'
import { useState } from 'react'

const Hooks = () => {

    const user_initial_state = "Harish"

    const [username, setUsername] = useState(user_initial_state)

  return (
    <div>
        {username}
        <button onClick={event => setUsername("Kalai")}>Change</button>  
        <button onClick={event => setUsername(user_initial_state)}>Reset</button>
    </div>
  )
}
export default Hooks