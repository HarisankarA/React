import React from 'react'
import { useState } from 'react'
//                                                   //On-Click
// const Hooks = () => {

//     const user_initial_state = "Harish"

//     const [username, setUsername] = `useState`(user_initial_state)

//   return (
//     <div>
//         {username}
//         <button onClick={event => setUsername("Kalai")}>Change</button>  
//         <button onClick={event => setUsername(user_initial_state)}>Reset</button>
//     </div>
//   )
// }
// export default Hooks

//                                                   //On-Change

// // const Hooks = () => {

// //   const user_initial_state = "Harish"

// //   const [username, setUsername] = useState(user_initial_state)

// // return (
// //   <div>

// //       {username}
      
// //       <form>

// //         <label htmlFor="username">User Name</label>

// //         <input type="text" value = {username} onChange={event => setUsername(event.target.value)} />

// //       </form>
      
// //       <button onClick={event => setUsername("")}>Change</button>  

// //       <button onClick={event => setUsername(user_initial_state)}>Reset</button>

// //   </div>
// // )
// }

// adding a value intead for push method
const Hooks = () => {

  const [number_array, setNumberArray] = useState([])

  return (

    <div>
      {number_array}
        <button onClick={event => setNumberArray([...number_array, 0])}>Add</button>
    </div>
  )
}

export default Hooks