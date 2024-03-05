import React from 'react'
import { useNavigate } from 'react-router-dom'

const Patch = () => {
  const navigate = useNavigate ()    

  return (
    <div>
        <button onClick={() => navigate('/all/customer/')}>Back</button>
    </div>
  )
}

export default Patch