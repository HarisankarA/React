import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductAdd = () => {
    const navigate = useNavigate()
    const [product_name, setProduct_name] = useState('')
    const [code, setCode] = useState('')
    const [price, setPrice] = useState('')
    const [gst, setGst] = useState('')

     const ProductAdd = (event) => {
        event.preventDefault()

        const productDataSet = {

            product_name:product_name,
            code: code,
            price: price,
            gst:gst
        }

        axios.post('http://127.0.0.1:4000/products/', productDataSet)
        .then(response => navigate('/product/list/'))
        .catch(error => {})

     }

    //  

  return (

        <div>
            
            <button onClick={() => navigate('/product/list/')}>Back</button> <br />

            <label htmlFor="">product Name::</label>
            <input type="text" value={product_name} onChange={event => setProduct_name(event.target.value)} /> <br />

            <label htmlFor="">Code::</label>
            <input type="text" value={code} onChange={event => setCode(event.target.value)} /> <br />

            <label htmlFor="">Price::</label>
            <input type="text" value={price} onChange={event => setPrice(event.target.value)} /> <br />

            <label htmlFor="">GST::</label>
            <input type="text" value={gst} onChange={event => setGst(event.target.value)} /> <br />

            <input type="submit" onClick={event => ProductAdd(event)}/>

        </div>

  )
}

export default ProductAdd