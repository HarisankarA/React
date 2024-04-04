import React, { useState } from 'react'


const PreviousState = () => {

    const [counter, setCounter] = useState(0)

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

    return (
        
        <div>

            {counter}

            <button onClick={increment}>Increment</button>

            <button onClick={decrement}>Decrement</button>

        </div>
    )
}

export default PreviousState