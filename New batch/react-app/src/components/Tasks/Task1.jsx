import React, { useEffect, useState } from 'react'

const Task1 = () => {

    const [count, setCount] = useState([]) //Array

    const [persondetails, setPersondetails] = useState({                         //Object
        firstname :"",
        lastname:""
    })

    const [results, setResults] = useState({

        subject:"",
        marks:""
    })
    
    const Incrementer = () => {

        setCount([...count, 1])

    }

    const updateFirstname = () => {

        setPersondetails ({...persondetails, firstname: "Harisankar"})

    }

    const updatLastname = () => {

        setPersondetails ({...persondetails, lastname: "Arumugam"})

    }

    const updateSubject = () => {

        setResults ({...results, subject: "Tamil"})
    }

    const updateMarks = () => {

        setResults ({...results, marks:"100"})
    }

    return (

        <div>
            
            {JSON.stringify(count)} <br />
            {JSON.stringify(persondetails)} <br />
            {JSON.stringify(results)} <br />
            
            <button onClick={() => Incrementer()}>Increment</button>  <br />

            <button onClick={() => updateFirstname()}>Add First Name</button> <br />
            <button onClick={() => updatLastname()} >Add Last Name</button><br />

            <button onClick={updateSubject} >Add subject</button><br />
            <button onClick={updateMarks} >Add subject</button><br />

        </div>
    )
}

export default Task1