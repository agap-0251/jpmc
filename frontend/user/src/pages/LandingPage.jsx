import React, { useContext, useEffect, useState } from 'react'
import Login from '../components/Login';
import Signup from '../components/Signup';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

const LandingPage = () => {
    const [hasAccount,setHasAccount] = useState(false);
    const nav = useNavigate()
    const {user,dispatch} = useContext(AuthContext)
    useEffect(() => {
        if(user !== null){
            nav("/home")
        }
    },[])
  return (
    <div className='flex flex-col items-center my-20'>
      {hasAccount ? <Login /> : <Signup />}
      <button onClick={() => setHasAccount(acc => !acc)} className='border-none text-green-300 bg-none outline-none mt-4' >{hasAccount ? "Create new account ?" : "Already have account ?"}</button>
    </div>
  )
}

export default LandingPage