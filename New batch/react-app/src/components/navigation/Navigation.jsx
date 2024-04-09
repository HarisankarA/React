import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {

    const navigate = useNavigate()

    return (
        
        <div>
            
            <h1>Home Page</h1>
            <button onClick={() => navigate('/navigate/')}>Navigate</button>
            
        </div>
    )
}

export default Navigation