import React, { useEffect } from 'react'
import axios from 'axios'

const AxiosAPIs = () => {

    useEffect (() => {

        axios.get('http://127.0.0.1:8000/customer/')
        .then(response => console.log(response.data))
        .catch(error => console.error())
        
    },[])

  return (
    <div>
        
    </div>
  )
}

export default AxiosAPIs