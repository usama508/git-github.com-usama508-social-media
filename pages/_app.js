import '../styles/globals.css'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState({value:null})

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      setUser({value:token})
    }
  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp
