import React from 'react'
import Singleline from './singleMulltilineHtml/Singleline'
import MultilineHtml from './singleMulltilineHtml/MultilineHtml'
import CompA from './nesting/CompA'
import FunctionCreation from './funtion/FunctionCreation'
import Ifelse from './ifElse/Ifelse'
import ElementVariable from './ifElse/ElementVariable'
import Ternery from './ifElse/Ternery'
import ShortCircuit from './ifElse/ShortCircuit'
import UseState from './Hooks/UseState'
import UseStateFunction from './Hooks/UseStateFunction'
import Mapmethod from './mapMethod/Mapmethod'



const NormalRenderings = () => {

    return (

        <div>
            {/* <Singleline></Singleline>
            <MultilineHtml></MultilineHtml>
            <CompA></CompA>
            <FunctionCreation></FunctionCreation>
            <Ifelse></Ifelse>
            <ElementVariable></ElementVariable> */}
            {/* <Ternery></Ternery>
            <ShortCircuit></ShortCircuit> */}
            {/* <UseState></UseState> */}
            {/* <UseStateFunction></UseStateFunction> */}
            <Mapmethod></Mapmethod>
            

        </div>
    )
    }

export default NormalRenderings