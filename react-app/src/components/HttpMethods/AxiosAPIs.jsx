import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosAPIs = () => {

    useEffect (() => {
//                                          Get Method
        axios.get('http://127.0.0.1:8000/customer/')
        .then(response => {})
        .catch(error => {})
        
    },[])

    return (
    <div>
      
    </div>
  )
}

export default AxiosAPIs