import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Auth'

const Home = () => {
    const nav = useNavigate()
    const {user} = useContext(AuthContext)
    useEffect(() => {
        if(user === null){
            nav("/")
        }
    },[])

  return (
    <div className='text-white text-[2rem] min-h-[100dvh] flex flex-col items-center justify-center' >
      <h1>Welcome {user?.username}</h1>
    </div>
  )
}

export default Home