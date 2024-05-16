import React, { useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

const Home = () => {
    const nav = useNavigate()
    useEffect(() => {
        if(localStorage.getItem("user") === null){
            nav("/")
        }
    },[])

  return (
    <div style={{fontSize : "2rem",color : "white"}}>Home</div>
  )
}

export default Home