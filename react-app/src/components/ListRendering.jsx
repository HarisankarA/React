import React from 'react'
import SecondComponent from './SecondComponent'

const ListRendering = () => {

    let students_data = [
        {
            id:1,
            name: "Harish",
            course: "Mern Stack"
        },{
            id:2,
            name: "Kalai",
            course: "React"
        }

    ]

    // let result = students_data.map(student => {
    //     return (
    //         <div key = {student.id}>
    //             <h2>Student Name:{student.name}</h2>
    //             <h3>Course Name:{student.course}</h3>
    //         </div>
    //       )
    // })


    //Using Array INDEX method when there is no ID value

//Save return type in single component and taking from there using properties

    let result = students_data.map((student, index ) => <SecondComponent key={index} date= {student}></SecondComponent>)

    //Normal Way
    // {
    //     return (
    //         <div key = {index}>
    //             <h2>Student Name:{student.name}</h2>
    //             <h3>Course Name:{student.course}</h3>
    //         </div>
    //       )
    // }
    // )

    return(
        <div>
            {result}
        </div>
    )
}

export default ListRendering