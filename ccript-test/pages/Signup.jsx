import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { useRouter } from "next/router";

export const Signup = () => {


  let [username, setUsername] = React.useState('')
  let [password, setPassword] = React.useState('')
  let [email, setEmail] = React.useState('')
  const [error, setError] = React.useState('')
  const { createUser } = UserAuth();
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      router.push("/Home/Homepage");
    //   navigate('/')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className='login-container'>
        <div className="login-fields" style={{ padding:"24px"}}>
          <h1>Educationic-X</h1>
          <p style={{color: "grey"}}>Enter your credentials</p>
          <div className="credentials">
          <input type="text" name="username" placeholder='Username' onChange={(e) => setUsername( e.target.value)}  />
          <input type="text" name="email" placeholder='Email'  onChange={(e) => setEmail( e.target.value)}/>
          <input type="password" name="password" placeholder='Password' onChange={(e) => setPassword( e.target.value)} />
          </div>
          <button onClick={handleSubmit} type="button" class="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
          Sign up
        </button>
          <br />
          <a href="/">Click here to login</a>
        </div>
    </div>
  )
}

export default Signup;