import React from 'react'
import { useNavigate } from 'react-router-dom'

const Redering = ({sData, index, deletefunc}) => {

  const navigate = useNavigate()

  return (


        <tr>
            <td>{index+1}</td>
            <td>{sData.customer_name}</td>
            <td>{sData.industry}</td>
            <td>
              <button onClick={()=> navigate(`/customer/patch/${sData._id}`)}>Edit</button>
            </td>
            <td>
              <button onClick={() => deletefunc(sData._id)} >Delete</button>
            </td>
            
        </tr>

  )
}

export default Redering