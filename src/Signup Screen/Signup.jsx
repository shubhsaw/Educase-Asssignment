import React from 'react'
import style from './Signup.module.css'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigate=useNavigate()
  return (
    <div id={style.base}>
        <div id={style.plate}>
        <h1>Create your</h1>
        <h1>PopX account</h1>
        <form action="">
            <label htmlFor="" id={style.l1}>Full Name</label> 
            <input type="text" required placeholder='Marry Doe'/>
            <label htmlFor="" id={style.l2}>Phone number</label>
            <input type="number" required  placeholder='12345'/>
            <label htmlFor="" id={style.l3}>Email address</label>
            <input type="email" required placeholder='abc@xyz.com' />
            <label htmlFor="" id={style.l4}>Password</label>
            <input type="password" required placeholder='********'/>
            <label htmlFor="" id={style.l5}>Company name</label>
            <input type="text" placeholder='Marry Doe'/>

            <label htmlFor="" id={style.l6} required>Are you an Agency?</label>
            <span>
            <input type="radio" id={style.yes} name='agency?'value='yes' /> <label htmlFor="yes">Yes</label>
            <input type="radio" id={style.no} name='agency?' value="no"/> <label htmlFor="no">No</label>
            </span>
            <br />
            <button onClick={()=>navigate('/profile')}>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
