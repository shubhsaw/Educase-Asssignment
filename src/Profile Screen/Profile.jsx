import React from 'react'
import style from './Profile.module.css'
const Profile = () => {
    return (
        <div id={style.page}>
            <div id={style.container}>
                <div id={style.header}>
                    <h1>Account Settings</h1>
                </div>
                <div id={style.prof}>
                    <span>
                    <img src="https://cdn.pixabay.com/photo/2023/01/16/19/00/ai-generated-7723105_1280.jpg" alt="Avatar" />
                    <div>
                    <h2>John Doe</h2><br />
                    <p>abc@xyz.com</p>
                    </div>
                    </span>
                    <p id={style.bio}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ratione quam fuga dicta accusantium illum aperiam, recusandae sit amet cupiditate, error odio fugiat ipsum! Laborum quod ut delectus pariatur unde.</p>
                </div>
                <p id={style.firstline}>---------------------------------------------------------------------------------------------</p>
                <p id={style.secondline}>---------------------------------------------------------------------------------------------</p>
            </div>
        </div>
    )
}

export default Profile
