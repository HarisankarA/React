import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosAPIs = () => {

    const [data, setData] = useState([])

    useEffect (() => {
//                                          Get Method
        axios.get('http://127.0.0.1:8000/customer/')
        .then(response => setData(response.data))
        .catch(error => {})
        
    },[])

    let result = data.map((customer_Data, index)=> {
      return(
        <tr key={index}>
          <td>{customer_Data.customer_name}</td>
          <td>{customer_Data.company_name}</td>
          <td>{customer_Data.age}</td>
          <td>{customer_Data.phone_number}</td>
          <td>{customer_Data.member_since}</td>
          <td>{customer_Data.address}</td>
        </tr>
      )
    })


  return (
    <div>
      <h2>Customers</h2>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th> 
              <th>Company Name</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>Member Since</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {result}
          </tbody>

        </table>
    </div>
  )
}

export default AxiosAPIs