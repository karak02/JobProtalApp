import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Jobs from './components/pages/Jobs';
import Browser from './components/pages/Browser';
import Singup from './components/auth/Singup';
import Login from './components/auth/Login';
import Profile from './components/pages/Profile';


function App() {
  return (
   <>
   <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/jobs' element={<Jobs/>} />
         <Route path='/browser' element={<Browser/>} />
         <Route path='/singup' element={<Singup/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/profile' element={<Profile/>} />
       </Routes>
   </>
  )
}

export default App
