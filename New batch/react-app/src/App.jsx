import React from 'react'
import './App.css'
import NormalRenderings from './components/NormalRenderings'
import NavBar from './components/NavBar'
import Home from './components/Home'
import CustomerAdd from './components/customers/CustomerAdd'

import { Routes, Route } from 'react-router-dom'



const App = () => {

    return (

        <div>
            <h1>React</h1>
            <NavBar></NavBar>
            
           <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/allcomponents/' element={<NormalRenderings/>} />


                <Route path='/customer/add/' element={<CustomerAdd/>} />
                
            </Routes>
            


        </div>

    )
}

export default App
