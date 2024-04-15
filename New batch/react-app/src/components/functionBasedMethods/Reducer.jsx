import React from 'react'

const Reducer = () => {

    let number_list = [9,9,4,4,7,9,3,6,2,9]

    const reducing = () => {

        let sum = number_list.reduce((total, value) => total + value, 0)

        console.log(sum);
    }

    return (

        <div>
            
                <button onClick={() => reducing()}>Reduce</button>

        </div>
    )
}

export default Reducer