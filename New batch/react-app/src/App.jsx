import React from 'react'
import './App.css'
import NormalRenderings from './components/NormalRenderings'

import { Routes, Route } from 'react-router-dom'

const App = () => {

    return (

        <div>
            
            <Routes>

                <Route path='/allComponents' element={<NormalRenderings/>} />
                
            </Routes>
            


        </div>

    )
}

export default App
