import React from 'react'

const Foreach = () => {

    let students = [

        {
            id:1,
            student_name :"Harisankar"
        },
        {
            id:2,
            student_name :"Kalai"
        },
        {
            id:3,
            student_name :"Rahul"
        },
        {
            id:4,
            student_name :"Kishore"
        }
    ]

    const foreaching = () => {

        let index_Of_Value = students.forEach(student => student.id * 2)

        console.log(index_Of_Value);
    }

    return (

        <div>
            
            <button onClick={() => foreaching()}>For Each</button>
            
        </div>

    )
}

export default Foreach