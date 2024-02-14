import React from 'react'

const Fragment2 = (data) => {
  return (
    <React.Fragment>
        <h2>Student Name:{data.name}</h2>
        <h3>Course Name:{data.course}</h3>
    </React.Fragment>
  )
}

export default Fragment2