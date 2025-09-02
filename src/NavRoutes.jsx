import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Lscreen from './Landing_Screen/Lscreen'
import Login from './Login_Page/Login'
import Signup from './Signup Screen/Signup'
import Profile from './Profile Screen/Profile'

const NavRoutes = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Lscreen/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavRoutes
