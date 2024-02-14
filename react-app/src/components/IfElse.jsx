import React from 'react'

const IfElse = () => {

    let valid_user = true

//                                                   //  1.If Else //

//     if (valid_user === true){

//   return (
//     <div>
//         <h2>Welcome Admin</h2>
//     </div>
//   )

// } else{

//     return (
//         <div>
//             <h2>Welcome Guest</h2>
//         </div>
//       )
// }

//                                                //   2.Element Variable //

// let container;

// if (valid_user === true){

//         container = <h2>Welcome Admin</h2>
   
// }
// else{

//     container = <h2>Welcome Guest</h2>
// }

// return(
//     <div>
//         {container}
//     </div>
// )

                                                    // 3.Ternery Operator //

// let container = valid_user === true ? <h2> Welcome Admin </h2> : <h2>Welcome Guest </h2>

// return(
//     <div>
//         {container}
//     </div>
// )

                                                    // 4.Short circuit method //

let container = valid_user === true && <h2> Welcome Admin </h2>

return(
    <div>
        {container}
    </div>
)
}
export default IfElse