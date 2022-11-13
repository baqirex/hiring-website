import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/registration/registration';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Registration/>} />
      </Routes>   
    </div>
  );
}

export default App;
