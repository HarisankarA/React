import React from 'react'

const Ternery = () => {

    //Single Line Ternery 
    let course_name = "React"
    // let result = course_name === "React" ? <h2> Its Javascript Library </h2>: <h2> Its Not A Library </h2>

    //MultiLine Ternery

    let result = course_name === "React" ? 
    <div>
        <h2> Its Javascript Library </h2>
        <h3>Its Front End</h3>
    </div>:

    <h2> Its Not A Library </h2>

        return (

            <div>

                {result}

            </div>
        )
}

export default Ternery