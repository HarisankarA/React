import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

const Objectmethod = () => {

    const [studentName, setStudentName] = useState ("")
    const [studentAge, setStudentAge] = useState("")
    const [studentData, setStudentData] = useState({
        name:"",
        age:""
    })

    const Submitevent = event => {
        event.preventDefault()
        setStudentData ({...studentData, name:studentName,
        age:studentAge})
        setStudentName ("")
        setStudentAge ("")
    }
    
    let result = <div> 
        <p>Student Name: {studentData.name}</p>
        <p>Student Age: {studentData.age}</p>
    </div>

  return (
    <div>
        <form>
            <label htmlFor="">Enter Student Name </label>
            <input type="text"  value = {studentName} onChange={event => setStudentName(event.target.value)}/>
            <label htmlFor="">Enter Age</label>
            <input type="number" value ={studentAge} onChange= {event => setStudentAge(event.target.value)} />
            <button onClick={event=> Submitevent(event)}>Submit</button>
        </form>
            {result}
    </div>
  )
}
export default Objectmethod