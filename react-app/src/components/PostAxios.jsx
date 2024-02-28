import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PostAxios = () => {

    const [customerName, setCustomerName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [age, setAge] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [memberSince, setMemberSince] = useState("")
    const [address, setAddress] = useState("")
    

    const postData = (event) => {
    event.preventDefault()

    const customer_Data ={
            customer_name: customerName,
            company_name: companyName,
            age: age,
            phone_number: phoneNumber,
            member_since: memberSince,
            address: address
    }

    axios.post('http://127.0.0.1:8000/customer/', customer_Data)
    .then(response => {})
    .catch(error => {})
    }


  return (
    <div>
        <form>

            <label htmlFor="">Customer Name:</label> <br />
            <input type="text" value = {customerName} onChange={event => setCustomerName(event.target.value)}/> <br />

            <label htmlFor="">Company Name:</label> <br />
            <input type="text" value = {companyName} onChange={event => setCompanyName(event.target.value)} /> <br />

            <label htmlFor="">Age:</label> <br />
            <input type="number" value = {age} onChange={event => setAge(event.target.value)}/> <br />

            <label htmlFor="">Phone Number:</label> <br />
            <input type="number" value = {phoneNumber} onChange={event => setPhoneNumber(event.target.value)}/> <br />

            <label htmlFor="">Member Since:</label> <br />
            <input type="date" value = {memberSince} onChange={event => setMemberSince(event.target.value)}/> <br />

            <label htmlFor="">Address:</label> <br />
            <input type="text" value = {address} onChange={event => setAddress(event.target.value)} /> <br /><br />

            <input type="submit" onClick={event =>postData(event)}/>

        </form>
    </div>
  )
}

export default PostAxios