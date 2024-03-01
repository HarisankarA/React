import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CustomerRendering from './CustomerRendering'

const GetAxios = () => {

    const [data, setData] = useState([])

    useEffect (() => {

        axios.get('http://127.0.0.1:8000/customer/')
        .then(response => setData(response.data))
        .catch(error => {})
        
    },[])

    let result = data.length > 0 ? data.map(customer => <CustomerRendering key= {customer.id} customer_Data= {customer}/>): <div>No Data Found</div>


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
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {result}
          </tbody>

        </table>
    </div>
  )
}

export default GetAxios