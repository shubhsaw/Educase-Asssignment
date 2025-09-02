import style from './Login.module.css'
import React from 'react'
const Login = () => {
    return (
        <div id={style.base}>
            <div id={style.plate}>
                <h1>Signin to your </h1>
                <h1>PopX account</h1>
                <h3>Lorem ipsum dolor sit </h3>
                <h3>amet consectetur adipisicing elit. Itaque!</h3>
                <form action="">
                    <label htmlFor="" id={style.email_label}>Email Address</label>
                    <input type="email" id={style.email} placeholder='Enter your email' />
                    <label htmlFor="" id={style.pass_label}>Password</label>
                    <input type="password" id={style.pass} placeholder='Enter your password' />
                    <button id={style.loginbtn}>Login</button>
                </form>

            </div>
        </div>
    )
}
export default Login;