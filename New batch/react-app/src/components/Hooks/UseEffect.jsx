import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [counter, setCounter] = useState(0)
    const [course,setCourse] = useState("Mern")

    const increment = () => {

        for (let i=0; i<100; i++) {

            setCounter(PreviousState => PreviousState + 1)

        }

    }

    const decrement = () => {
 
        for (let i=0; i<100; i++) {

            setCounter(PreviousState => PreviousState - 1)

        }
    }

    useEffect(() => {
        console.log("UseEffect");
    },[counter])

    return (
        
        <div>

            {counter}

            <button onClick={increment}>Increment</button>

            <button onClick={decrement}>Decrement</button>


            <button onClick={()=> setCourse("React")}>Change course</button>

            {course}

        </div>
    )

}

export default UseEffect