import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerRendering = ({customer_Data}) => {
  const navigate = useNavigate ()
    return(
        <tr>
          <td>{customer_Data.customer_name}</td>
          <td>{customer_Data.company_name}</td>
          <td>{customer_Data.age}</td>
          <td>{customer_Data.phone_number}</td>
          <td>{customer_Data.member_since}</td>
          <td>{customer_Data.address}</td>
          <td>
            <button onClick={() => navigate(`/patch/customer/${customer_Data.id}`)}>Edit</button>
          </td>
        </tr>
    )
}

export default CustomerRendering