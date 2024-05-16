import React, { useState } from "react";

export default function Signup(){

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isLoading,setIsLoading] = useState(false)

    async function sendData(){
        setIsLoading(true)
        console.log(username,password,email)
        const user = await fetch("http://localhost:3000/signup",{
            method : "POST",
            body : JSON.stringify({
               username,email,password
            })
        })
        console.log(await user.json())

        if(user.ok){
            console.log(await user.json())
        }
        else {
            console.log("something went wrong")
        }

        setEmail("")
        setUsername("")
        setPassword("")
        setIsLoading(false)
    }

    return (
        <div >
            <form style={{display : "flex",flexDirection : "column",margin : "20px"}}>
                <input onChange={(e) => setUsername(e.target.value)} value={username} style={{padding : "1rem"}} type="text" placeholder="username" />
                <input onChange={(e) => setEmail(e.target.value)} value={email} style={{padding : "1rem"}} type="email" placeholder="email" />
                <input onChange={(e) => setPassword(e.target.value)} value={password} style={{padding : "1rem"}} type="password" placeholder="password" />
                <button style={{backgroundColor : "black",color : "white"}} type="button" disabled = {isLoading} onClick={sendData}>Submit</button>
            </form>
        </div>
    )
}