import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductRender from './ProductRender'
import { useNavigate, useParams } from 'react-router-dom'

const ProductGet = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [pData, setPData] = useState([])

    const {id} = params
    const deletefunction = id => {
        axios.delete(`http://127.0.0.1:4000/products/${id}`)
        .then(response => setPData (pData.filter(product => product._id !==id)))
        .catch(error => {})
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:4000/products/')
        .then(response => setPData(response.data.product_data))
        // .then(response => console.log(response))
        .catch(error => {})
    },[])

     let productResult = pData.length > 0 ? pData.map((product, index) => <ProductRender key = {product._id} productData = {product} index ={index} DeleteProduct = {deletefunction}/>) :

     <tr>
        <td colSpan={8}>No Data Found</td>
     </tr>


  return (

        <div>
            <button onClick={() => navigate('/product/add/')}>Add New Product</button>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product Name</th>
                        <th>Code</th>
                        <th>Price</th>
                        <th>GST</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {productResult}
                </tbody>
            </table>

        </div>

  )
}

export default ProductGet