import React from 'react'
import SupportFunction from './SupportFunction';


const FunctionCreation = () => {

    const LogData = (a, b) => {

        console.log("Logging A Data");
        console.log(a);
        console.log(b);
    }

    return (

    //Without props 

        // <div>

        //     <button onClick={LogData}>Log Data</button>
        
        // </div>

    //With using props 

    <div>
        <SupportFunction data = {LogData}></SupportFunction>
    </div>
    )
}

export default FunctionCreation