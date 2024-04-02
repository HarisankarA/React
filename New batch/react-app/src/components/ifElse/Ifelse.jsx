import React from 'react'
import ElementVariable from './ElementVariable'

const Ifelse = () => {

    let Course_name = "Mern Stack"
    
    if (Course_name === "Mern Stack"){
    return (
        <div>
            <h2>A Full Stack Course</h2>
        </div>
    )
    }

    else{
        return(
            <div>
                <h2>Unknown Course</h2>
            </div>
        )
    }
}

export default Ifelse