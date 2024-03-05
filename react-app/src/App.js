import './App.css';
import { Routes, Route } from 'react-router-dom';
import GetAxios from './components/HttpMethods/GetAxios';
import PostAxios from './components/HttpMethods/PostAxios';
import Patch from './components/HttpMethods/Patch';
import Navbar from './components/HttpMethods/Navbar';



function App() {
  return (
    <div>
      <h1>Hi Harish, Welcome To React Workspace</h1>
      <Navbar></Navbar>
      <Routes>
        <Route path='/all/customer/' element={<GetAxios/>} />
        <Route path='/post/customer/' element={<PostAxios/>} />
        <Route path='/patch/customer/:id/' element={<Patch/>} />
      </Routes>
            
    </div>
  );
}
export default App;