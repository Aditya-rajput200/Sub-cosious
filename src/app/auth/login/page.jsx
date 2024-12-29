'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const port = process.env.NEXT_PUBLIC_PORT
function Login() {
    const router = useRouter()

    const handelSubmit = async (e) => {
        e.preventDefault()
       
        const email = e.target.email.value
        const password = e.target.password.value   

        try {
            const response = await fetch(`http://localhost:${port}/api/v1/auth/loginUser`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                 
                    email,
                    password,
                }),
            })

            if (response.ok) {
                const data = await response.json()
                
            
                router.push("/dashboard") 
            } else {  
                alert("Invalid Credentials")
            }
        } catch (error) {
            console.error("Error:", error)
            alert("Something went wrong!")
        }
    }

    return (
        <>
            <div className="h-screen flex justify-center items-center"> 
                <form onSubmit={handelSubmit} className="space-y-4">
                 
                    <input 
                        className="border-2 border-black rounded-md p-2 block w-full" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required 
                    />
                    <input 
                        className="border-2 border-black rounded-md p-2 block w-full" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required 
                    />
                    <Button type="submit">Login</Button>
                </form>
            </div>
        </>
    )
}

export default Login
