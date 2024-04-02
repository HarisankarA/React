import React from 'react'
import { useState } from 'react'

const UseState = () => {

    const [course, setCourse] = useState('React')

    return (

        <div>
            {course}

            <button onClick={()=> setCourse('JavaScript')}>Change Course</button>

        </div>
    )
}

export default UseState