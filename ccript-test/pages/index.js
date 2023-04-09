import Head from 'next/head'
import Login from '../components/Auth/Login'


export default function Home() {



  return (
    <div>
      <Head>
        <title>Educationic-X</title>
        <meta name="description" content="" />
        <link rel="icon" href="/fav.png" />
      </Head>
      
      <Login/>
    </div>
  )
}