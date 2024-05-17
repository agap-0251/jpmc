import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Auth'

const NavBar = () => {
  const {user,dispatch} = useContext(AuthContext)
  const nav = useNavigate()
  const handleClick = () => {

    if(!user){
      return nav("/")
    }

    localStorage.removeItem("user")
    dispatch({type : 'LOGOUT'})
    nav("/")
  } 

  return (
    <nav className='flex justify-center items-center mt-3 px-10 py-2 bg-cyan-700 rounded-full '>
        <NavLink className="mx-[1rem] font-semibold" to="/home" >Home</NavLink>
        <NavLink className="mx-[1rem] font-semibold" to="/">About us</NavLink>
        <button onClick={handleClick} type='button' className = "bg-white text-black px-[1rem] py-[0.6rem] rounded-lg font-semibold">{user ? "Logout" : "Login"}</button>
    </nav>
  )
}

export default NavBar