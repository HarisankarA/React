import React from 'react'
import { useState } from 'react'

const Task1 = () => {

            const [student_name = setStudentName] = useState([])

            

  return (
    <div>
            <form>
                <label htmlFor="student_name">Enter Studet Name</label>
                
                <input type="text" value={student_name}  />

            </form>
    </div>
  )
}

export default Task1