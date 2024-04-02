import React from 'react'

const ElementVariable = () => {

    let Course_name = "Mern Stack"
    let result = null
    
    if (Course_name === "Mernn Stack"){
        result = <div>
                    <h2>A Full Stack Course</h2>
                 </div>
    }

    else{
        result = <div>
                    <h2>Unknown Course</h2>
                 </div>
    }

    return(
        <div>
            {result}
        </div>
    )
}

export default ElementVariable