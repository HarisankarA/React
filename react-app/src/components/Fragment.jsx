import React from 'react'
import Fragment2 from './Fragment2'

const Fragment = () => {
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

let result = students_data.map((student, index ) => <Fragment2 key={index} date= {student}></Fragment2>)

return( 
    <div>
        {result}
    </div>
)

}

export default Fragment