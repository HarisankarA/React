import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Patch = () => {
  const navigate = useNavigate ()
  const params = useParams ()
  const {id} = params
  const [customerName, setCustomerName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [age, setAge] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [memberSince, setMemberSince] = useState("")
  const [address, setAddress] = useState("")

  useEffect (() => {
  axios.get(`http://127.0.0.1:8000/customer/${id}/`)
      .then(response => {
        setCustomerName(response.data.customer_name)
        setCompanyName(response.data.company_name)
        setAge(response.data.age)
        setPhoneNumber(response.data.phone_number)
        setMemberSince(response.data.member_since)
        setAddress(response.data.address)
      })
      .catch(error => {})
  },[])

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
    axios.patch(`http://127.0.0.1:8000/customer/${id}/`, customer_Data)
     .then(response => navigate ('/all/customer/') )
     .catch(error => {})
  }

  const delete_data = (event) => {
    event.preventDefault()
    axios.delete(`http://127.0.0.1:8000/customer/${id}/`,)
    .then(response => navigate ('/all/customer/') )
    .catch(error => {})
  }

  return (
    <div>
      <button onClick={() => navigate('/all/customer/')}>Back</button>

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
          
        <input type="submit" value = "Update" onClick={event =>postData(event)} />

        <button onClick={event => delete_data(event)}>Delete</button>

      </form>

    </div>
  )
}

export default Patch     