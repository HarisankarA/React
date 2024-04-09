import React from 'react'

const FindIndex = () => {

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

    const finIndex = () => {

        let index_Of_Value = students.findIndex((student, index, array) => student.student_name === "Harisankar")

        console.log(index_Of_Value);
    }


    return (

        <div>
            
            <button onClick={() => finIndex()}>Find</button>
            
        </div>
    )
}

export default FindIndex