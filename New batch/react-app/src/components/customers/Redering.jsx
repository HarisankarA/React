import React from 'react'

const Redering = ({sData, index}) => {

  return (


        <tr>
            <td>{index+1}</td>
            <td>{sData.customer_name}</td>
            <td>{sData.industry}</td>
            <td>
              <button>Edit</button>
            </td>
            
        </tr>

  )
}

export default Redering