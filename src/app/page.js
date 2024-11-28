'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation' // Use this for client-side navigation
import React from 'react'

function Page() {
    const router = useRouter()

    const login = () => {
        router.push('/auth/login') // Use push for client-side navigation
    }

    const signUp = () => {
        router.push('/auth/signUp') // Example for Sign Up redirection
    }

    return (
        <div className="h-full flex justify-center items-center">
            <Button 
                variant="outline" 
                className="ml-5" 
                onClick={login} // Pass the function reference
            >
                Login
            </Button>

            <Button 
                variant="outline" 
                className="ml-5" 
                onClick={signUp} // Example Sign Up button action
            >
                Sign Up
            </Button>
        </div>
    )
}

export default Page
