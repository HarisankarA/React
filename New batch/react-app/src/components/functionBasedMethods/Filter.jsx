import React from 'react'

const Filter = () => {

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

    const filtering = () => {

        let index_Of_Value = students.filter((student, index, array) => student.student_name === "Rahul")

        console.log(index_Of_Value);
    }


    return (

        <div>
            
            <button onClick={() => filtering()}>Filter</button>
            
        </div>
    )
}

export default Filter