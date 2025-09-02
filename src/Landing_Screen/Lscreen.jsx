import React, { use } from 'react'
import style from './Lscreen.module.css'
import { useNavigate } from 'react-router-dom';
const Lscreen = () => {
    const navigate=useNavigate();
  return (
    <div id={style.base}>
      <div id={style.plate}>
        <h1>Welcome to PopX</h1>
        <h3>Lorem ipsum dolor sit.</h3>
        <h3>consectetur adipisicing elit. </h3>
        <div id={style.btn}>
        <button onClick={()=>navigate('/signup')}>Create Account</button>
        <button onClick={()=>navigate('/login')}>Already Register?Login</button>
        </div>
      </div>
    </div>
  )
}

export default Lscreen
