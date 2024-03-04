import React from 'react'

const CustomerRendering = ({customer_Data}) => {

    return(
        <tr>
          <td>{customer_Data.customer_name}</td>
          <td>{customer_Data.company_name}</td>
          <td>{customer_Data.age}</td>
          <td>{customer_Data.phone_number}</td>
          <td>{customer_Data.member_since}</td>
          <td>{customer_Data.address}</td>
          <td>
            <button>Edit</button>
          </td>
        </tr>
    )
}

export default CustomerRendering