import React from 'react'
import { useContext } from 'react'
import { Username } from '../../App'

// const CompC = () => {
//     const user_name = useContext(Username)
//   return (
//     <div>
//         {user_name}
//     </div>
//   )
// }

//In line CSS


const CompC = () => {
    const user_name = useContext(Username)
    return (
        <div>
         {
            user_name.length > 5 ? 
            <p style = {{backgroundColor : "red"}}>{user_name}</p>
            :<p style={{backgroundColor : "blue"}}>{user_name}</p>
         }
        </div>
  )
}

export default CompC