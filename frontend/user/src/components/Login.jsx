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
        <div style={{display : "flex",flexDirection : "column",alignItems : "center",backgroundColor : "teal"}}>
            <h1 style={{fontSize : "2rem"}}>Login Form</h1>
            <form style={{display : "flex",flexDirection : "column",margin : "20px"}} method="POST">
                <input onChange={(e) => setEmail(e.target.value)} value={email} style={{padding : "0.7rem 1rem",margin : "10px 0"}} type="email" placeholder="email" />
                <input onChange={(e) => setPassword(e.target.value)} value={password} style={{padding : "0.7rem 1rem",margin : "10px 0"}} type="password" placeholder="password" />
                <button style={{backgroundColor : "black",color : "white"}} type="button" disabled = {isLoading} onClick={sendData}>Submit</button>
            </form>
        </div>
    )
}