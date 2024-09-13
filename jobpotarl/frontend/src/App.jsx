import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Jobs from './components/pages/Jobs';
import Browser from './components/pages/Browser';
import Singup from './components/auth/Singup';
import Login from './components/auth/Login';


function App() {
  return (
   <>
   <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/jobs' element={<Jobs/>} />
         <Route path='/browser' element={<Browser/>} />
         <Route path='/singup' element={<Singup/>} />
         <Route path='/login' element={<Login/>} />
       </Routes>
   </>
  )
}

export default App
