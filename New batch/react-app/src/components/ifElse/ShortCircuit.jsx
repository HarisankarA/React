import React from 'react'

const ShortCircuit = () => {

    let trainer = "Kishore"

    let result = trainer === "Kishore" && <h2>Best Trainer In Qtree</h2>

        return (

            <div>
                        
            {result}

            </div>

        )
}

export default ShortCircuit