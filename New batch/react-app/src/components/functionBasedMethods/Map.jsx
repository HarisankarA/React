import React from 'react'

const Map = () => {

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

    const Mapping = () => {

        let index_Of_Value = students.map(student => student.id * 2)

        console.log(index_Of_Value);
    }

    return (

        <div>
            
            <button onClick={() => Mapping()}>Map</button>
            
        </div>

    )
}

export default Map