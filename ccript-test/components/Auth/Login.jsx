import { React, useState, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { initFirebase } from '../../firebase/firebaseApp'
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router";
import { UserAuth } from '../../context/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const { signIn } = UserAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    router.push("/Home/Homepage");
    return <div>Loading...</div>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };


  const logIn = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result.user);
  }
  

  return (
    <div className='login-container'>
      <div className="login-fields">
      <h1>Educationic-X</h1>
        {/* <h2>Login</h2> */}
        <p style={{ color: "grey" }}>Enter your credentials</p>
        <div className="credentials">
          <input type="text" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className=''>
        <button onClick={handleSubmit} type="button" class="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
          Sign in
        </button>
        <br />
        <button onClick={logIn} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
          <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
          Sign in with Google
        </button>
        </div>
        <br />
        <a href="/Signup">Click here to Signup</a>
      </div>
    </div>
  )
}

export default Login;