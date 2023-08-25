import React from 'react'
import { useState } from 'react'

export const Login = (props) => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }
    return (
        <div className='container'>
            <form className='login' onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='abc@gmail.com' name='email' />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='*********' name='password' />
                <button className='btn2' type='submit'>login</button>
            </form>
             </div>
    )
}
