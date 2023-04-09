import React from 'react'
import './login.css'

export const Signup = () => {


  let [username, setUsername] = React.useState('')
  let [password, setPassword] = React.useState('')
  let [email, setEmail] = React.useState('')
  
  return (
    <div className='login-container'>
        <div className="login-fields" style={{ padding:"24px"}}>
          <h2>Signup</h2>
          <p style={{color: "grey"}}>Enter your credentials</p>
          <div className="credentials">
          <input type="text" name="username" placeholder='Username' onChange={(e) => setUsername( e.target.value)}  />
          <input type="text" name="email" placeholder='Email'  onChange={(e) => setEmail( e.target.value)}/>
          <input type="password" name="password" placeholder='Password' onChange={(e) => setPassword( e.target.value)} />
          <input type="text" name="cpassword" placeholder='Confirm Password'  />
          </div>
          <button >Signup</button>
          <br />
          <a href="/">Click here to login</a>
        </div>
    </div>
  )
}

export default Signup;