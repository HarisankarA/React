import React from 'react'
import ProductGet from './ProductGet'
import { useNavigate } from 'react-router-dom'

const ProductRender = ({productData, index, DeleteProduct}) => {
 const navigate = useNavigate()
  return (
    <tr>
        <td>{index+1}</td>
        <td>{productData.product_name}</td>
        <td>{productData.code}</td>
        <td>{productData.price}</td>
        <td>{productData.gst}</td>
        <td>
          <button onClick={()=> navigate (`/product/edit/${productData._id}`)}>Edit</button>
        </td>
        <td>
          <button onClick={() => DeleteProduct(productData._id)}>Delete</button>
        </td>
    </tr>
  )
}

export default ProductRender