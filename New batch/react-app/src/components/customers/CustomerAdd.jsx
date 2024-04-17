import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CustomerAdd = () => {

    const [customername, setCustomerName] = useState('')
    const [industry, setIndustry] = useState('')
    const navigate = useNavigate ()

    const AddNewCustomer = event => {
        event.preventDefault()

        const dataset = {
            customer_name: customername,
            industry: industry
        }
        
        axios.post('http://127.0.0.1:4000/customers/', dataset)
        .then(response => navigate('/customer/list/'))
        .catch(error => {})
    }

  return (

        <div>
            <form>
                <button onClick={()=> navigate('/customer/list/')}>Back</button><br />
                <label htmlFor="">Customer Name: </label>
                <input type="text"  value={customername} onChange={event => setCustomerName(event.target.value)}/>
                <br />
                
                <label htmlFor="">Industry: </label>
                <input type="text" value={industry} onChange={event => setIndustry(event.target.value)}/>
                <br />

                <input type="submit" onClick={event => AddNewCustomer(event)} />

                

            </form>          
        </div>
  )
}

export default CustomerAdd