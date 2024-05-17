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

        console.log(user)
    },[])

  return (
    <div style={{fontSize : "2rem",color : "white"}}>Welcome {user?.username}</div>
  )
}

export default Home