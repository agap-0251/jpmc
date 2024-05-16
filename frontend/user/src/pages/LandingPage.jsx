import React, { useEffect, useState } from 'react'
import Login from '../components/Login';
import Signup from '../components/Signup';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [hasAccount,setHasAccount] = useState(false);
    const nav = useNavigate()
    useEffect(() => {
        if(localStorage.getItem("user") !== null){
            nav("/home")
        }
    },[])
  return (
    <div>
      {hasAccount ? <Login /> : <Signup />}
      <button onClick={() => setHasAccount(acc => !acc)} style={{border : "none",color : "green",background : "none",outline : "none"}}>{hasAccount ? "Create new account ?" : "Already have account ?"}</button>
    </div>
  )
}

export default LandingPage