import React from 'react'
import { useState } from 'react'


export default function Register(props) {
    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [name, setName] = useState('')
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(name)
            console.log(email);
            console.log(password);
        }
        return (
            <div div className='container'>
                <form className='register' onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder='Full Name' />
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='abc@gmail.com' name='email' />
                    <label htmlFor="password">password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='*********' name='password' />
                    <button className='btn2' type='submit'>Register</button>
                </form>
                
            </div>
        )
 
}
