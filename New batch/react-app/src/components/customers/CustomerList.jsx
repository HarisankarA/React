import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'
import Redering from './Redering'

const CustomerList = () => {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    

    useEffect(() => {
        axios.get('http://127.0.0.1:4000/customers/')
        .then(response => setData(response.data.customer_data))
        .catch(error => {})
    },[])

      let result = data.length > 0 ? data.map((customer, index) => <Redering key={customer._id} sData = {customer} index = {index}/>): 
      <tr>No Data Found</tr>


  return (

   <div>
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Customer</th>
                    <th>Industry</th>
                    <th>Edit</th>
                </tr>
            </thead>

            <tbody>
                {result}
            </tbody>
        </table>

        <button onClick={() => navigate('/customer/add/')}>Add Customer</button>

    </div>
  )
}

export default CustomerList