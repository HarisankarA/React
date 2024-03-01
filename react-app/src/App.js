import './App.css';
import { Routes, Route } from 'react-router-dom';
import GetAxios from './components/HttpMethods/GetAxios';
import PostAxios from './components/HttpMethods/PostAxios';



function App() {
  return (
    <div>
      <h1>Hi Harish, Welcome To React Workspace</h1>

      <Routes>
        <Route path='/all/customer/' element={<GetAxios/>} />
        <Route path='/post/customer/' element={<PostAxios/>} />
      </Routes>
            
    </div>
  );
}
export default App;