import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../context/Auth";

export default function Login(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const nav = useNavigate()
    const {dispatch} = useContext(AuthContext)

    async function sendData(){
        setIsLoading(true)
        console.log(password,email)
        const user = await fetch("http://localhost:3000/login",{
            method : "POST",
            headers : {
                "Content-type" : "application/json",
            },
            body : JSON.stringify({
               email,password
            })
        })
        // console.log(await user.json())

        if(user.ok){
            const data = await user.json()
            localStorage.setItem("user",JSON.stringify(data))
            dispatch({type : 'LOGIN',payload : data})
            nav("/home")
        }
        else {
            console.log("something went wrong")
        }

        setEmail("")
        setPassword("")
        setIsLoading(false)
    }

    return (
        <div className="flex flex-col items-center justify-evenly bg-slate-700 w-[19rem] h-[22rem] rounded-xl shadow-sm shadow-slate-100">
            <h1 style={{fontSize : "2rem"}}>Login Form</h1>
            <form className="flex flex-col m-[20px] justify-evenly h-[15rem]" method="POST">
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="px-[1rem] py-[0.4rem] my-[2px] rounded-md text-black" type="email" placeholder="email" />
                <input onChange={(e) => setPassword(e.target.value)} value={password} className="px-[1rem] py-[0.4rem] my-[2px] rounded-md text-black" type="password" placeholder="password" />
                <button className="bg-black text-white py-2 rounded-md" type="button" disabled = {isLoading} onClick={sendData}>Submit</button>
            </form>
        </div>
    )
}