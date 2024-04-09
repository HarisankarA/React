import React, { useState } from 'react'

const CustomerAdd = () => {

    const [customername, setCustomerName] = useState('')
    const [industry, setIndustry] = useState('')

    const AddNewCustomer = event => {
        event.preventDefault()

        const dataset = {
            customer_name: customername,
            industry: industry
        }
        console.log(dataset);
    }

    

  return (

        <div>
            <form>

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