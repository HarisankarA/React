import React from 'react'
import MapMethodIndex from './MapMethodIndex'

const Mapmethod = () => {

        let dataset = [
            {
                id:1,
                language: "Tamil",
                mark:85,
                pass: true
            },
            {
                id:2,
                language: "English",
                mark:95,
                pass: true
            },
            {
                id:3,
                language: "Maths",
                mark:25,
                pass: false
            },
            {
                id:4,
                language: "Science",
                mark:55,
                pass: true
            },
            {
                id:5,
                language: "Social Science",
                mark:100,
                pass: true
            }
        ]
    
        let result = dataset.map(data => {

            return(

                <tr key ={data.id}>
                    <td>{data.language}</td>
                    <td>{data.mark}</td>
                    <td>{data.pass ? "Pass": "Fail"}</td>
                </tr>
            )
        })

    return (

        <div>
            <h2>Map Method Using ID</h2>
            <table>
                <thead>
                    <tr>
                        <th>Language</th>
                        <th>Marks</th>
                        <th>Result</th>
                    </tr>
                </thead>

                <tbody>

                    {result}
                    
                </tbody>

            </table>

            <MapMethodIndex></MapMethodIndex>
        </div>
    )
}

export default Mapmethod