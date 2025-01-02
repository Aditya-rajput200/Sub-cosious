"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Use this for client-side navigation
import React, { useEffect, useState } from "react";

const port = process.env.NEXT_PUBLIC_PORT;
const router = useRouter();
function Page() {

useEffect(()=>{
const cookies = document.cookie;
const isAuthenticate = cookies.split('; ').find((row)=>row.startsWith('authToken'))

if(!isAuthenticate){
  router.push('/auth/login')
}
},[])
  

  const login = () => {
    router.push("/auth/login"); 
  };

  const signUp = () => {
    router.push("/auth/signUp");
  };

  const dashboard = () => {
    router.push("/dashboard"); 
  };




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

      <Button
        variant="outline"
        className="ml-5"
        onClick={dashboard} 
      >
        Get Started
      </Button>

 

    </div>
  );
}

export default Page;
