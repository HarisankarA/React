import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductEdit = () => {
  
  const navigate = useNavigate()
  const params = useParams()

    const {id} = params
    const [product_name, setProduct_name] = useState("")
    const [code, setCode] = useState("")
    const [price, setPrice] = useState("")
    const [gst, setGst] = useState("")

    const ProductPatch = event => {
      event.preventDefault()

      const productData_set = {
        
        product_name: product_name,
        code:code,
        price:price,
        gst:gst

      }

      axios.patch(`http://127.0.0.1:4000/products/${id}`,productData_set )
      .then(response => navigate('/product/list/'))
      .catch(error => {})

    }

    const ProductDelete = event => {
      axios.delete(`http://127.0.0.1:4000/products/${id}`)
      .then(response => navigate('/product/list/'))
      .catch(error => {})
    }

      useEffect(() => {
        axios.get(`http://127.0.0.1:4000/products/${id}`)
        .then(response => {
          setProduct_name(response.data.product_data.product_name)
          setCode(response.data.product_data.code)
          setPrice(response.data.product_data.price)
          setGst(response.data.product_data.gst)
        })
        .catch(error => {})
      },[])

    

  return (

    <div>

        <button onClick={() => navigate('/product/list/')}>Back</button> <br />
        
        <label htmlFor="">Product Name</label>
        <input type="text" value={product_name}  onChange={event => setProduct_name(event.target.value)}/> <br />

        <label htmlFor="">Code</label>
        <input type="text" value={code}  onChange={event => setCode(event.target.value)}/> <br />

        <label htmlFor="">Price</label>
        <input type="text" value={price}  onChange={event => setPrice(event.target.value)}/> <br />

        <label htmlFor="">Gst</label>
        <input type="text" value={gst}  onChange={event => setGst(event.target.value)}/> <br />
        
        <input type="submit" onClick={event => ProductPatch(event)}/>

        <button onClick={event => ProductDelete(event)}>Delete Product</button>

    </div>
  )
}

export default ProductEdit