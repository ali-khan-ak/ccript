import Head from 'next/head'
import Login from '../components/Auth/Login'
import { initFirebase } from '../firebase/firebaseApp'
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { AuthContextProvider } from '../context/AuthContext';

export default function Home() {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider)
  }

  return (
    <div>
      <Head>
        <title>Educationic-X</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      
      <Login/>
      {/* <Navbar/>
      <Main/>
      <Work /> */}
    </div>
  )
}