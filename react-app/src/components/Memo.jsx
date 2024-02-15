import React from 'react'
import { useState } from 'react'
//                                                   //On-Click
const Memo = () => {

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
export default React.memo(Memo)


// When value doest chnage means the component will not rerun that why we are using the memo method for resude the server load.