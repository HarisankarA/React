import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const CustomerPatch = () => {

  const navigate = useNavigate()
  const params = useParams()

  const {id} = params
  const [customername, setCustomername] = useState("")
  const [industry, setIndustry] = useState("")


  const updateCustomer = (event) => {
    event.preventDefault()

    const customer_data = {
      customer_name: customername,
      industry:industry
    }

    axios.patch(`http://127.0.0.1:4000/customers/${id}/`, customer_data)
    .then(response => navigate('/customer/list/'))
    .catch(error => {})
  }

  const Deletecustomer = (event) => {
    axios.delete(`http://127.0.0.1:4000/customers/${id}/`)
    .then(response => navigate('/customer/list/'))
    .catch(error=>{})
}


  useEffect (() => {
    axios.get(`http://127.0.0.1:4000/customers/${id}/`) 
        .then(response => {
          setCustomername(response.data.customer_data.customer_name)
          setIndustry(response.data.customer_data.industry)
          })
        .catch(error => {})
  },[])

  return (

        <div>
            
                <label htmlFor="">Customer Name: </label>
                <input type="text"  value={customername} onChange={event => setCustomername(event.target.value)}/>
                <br />
                
                <label htmlFor="">Industry: </label>
                <input type="text" value={industry} onChange={event => setIndustry(event.target.value)}/>
                <br />

                <input type="submit" value = "Update" onClick={event => updateCustomer(event)} />
                <button onClick={() => navigate('/customer/list/')}>Back</button>
                
                <button onClick={(event) => Deletecustomer(event)}>Delete</button>
        </div>
  )
}

export default CustomerPatch