import React, { useEffect } from 'react'

const Task2 = () => {

    const array = ["AB", "AB", "AB", "AB"];

    const duplicates = [];
    
    const duplicate = () => {

        for (let x of array) {

            if (array.indexOf(x) && ! indexeOf(array)){
              
              duplicates.push(x)

            }else {
              return("No Duplicate")
            }

        }

    }

  return (

    <div>
        
        {duplicates}

    </div>
  )
}

export default Task2