import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'


import NormalRenderings from './components/NormalRenderings'
import NavBar from './components/NavBar'
import Home from './components/Home'
import CustomerAdd from './components/customers/CustomerAdd'
import CustomerList from './components/customers/CustomerList'
import CustomerPatch from './components/customers/CustomerPatch'




const App = () => {

    return (

        <div>
            <h1>React</h1>
            <NavBar></NavBar>
            
           <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/allcomponents/' element={<NormalRenderings/>} />


                <Route path='/customer/list/' element={<CustomerList/>} />
                <Route path='/customer/add/' element={<CustomerAdd/>} />
                <Route path='/customer/patch/:id/' element={<CustomerPatch/>} />
                
            </Routes>
            


        </div>

    )
}

export default App
