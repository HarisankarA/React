import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetAxios from './components/HttpMethods/GetAxios';
import PostAxios from './components/HttpMethods/PostAxios';
import Patch from './components/HttpMethods/Patch';
import Navbar from './components/HttpMethods/Navbar';
import UseReducer from './components/UseReducer';
import UseState from './components/UseState';

import CompA from './components/UseContext/CompA';
import UseContextReducer from './components/UseContextReducer/UseContextReducer';

export const Username = React.createContext()



function App() {
  return (
    <div>
      <h1>Hi Harish, Welcome To React Workspace</h1>
      <Navbar></Navbar>
      <Routes>
        <Route path='/all/customer/' element={<GetAxios/>} />
        <Route path='/post/customer/' element={<PostAxios/>} />
        <Route path='/patch/customer/:id/' element={<Patch/>} />

        <Route path='/useconstext/compA/' element={
          <Username.Provider value = {"React c"}>
            <CompA></CompA>
          </Username.Provider>} 
        />

        <Route path = '/useconstext/contextwithreducer/' element={<UseContextReducer/>}/>
         
      </Routes>
      <UseReducer></UseReducer>
      <UseState></UseState>
    </div>
  );
}
export default App;