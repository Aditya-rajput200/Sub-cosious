"use client"

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import { GiShare } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
import axios from 'axios';
const port = process.env.NEXT_PUBLIC_PORT
function page() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);

useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  const result = async () => {
    try {
      const response = await axios.get(`http://localhost:${port}/api/v1/user/fetchAllContent`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data.data);
    } catch (error) {
      console.log(token)
      console.error("Error fetching data:", error);
      
      setData([]); 
    }
  };
  result();
  data.filter((item) => item.type === "blog") 

  return (
    <>

<div className="nav flex justify-between items-center p-6 rounded-lg ">
        <div className="title font-serif text-gray-800 font-extrabold text-3xl tracking-wide">
          Blogs
        </div>
        <div className="buttons flex gap-4">
          <Button 
            variant="secondary" 
            className="bg-white text-purple-600 hover:bg-purple-100 hover:shadow-md w-36 py-2 flex items-center justify-center gap-2 rounded-md font-semibold transition duration-300"
          >
            <GiShare className="text-lg" /> Share Brain
          </Button>

          <Link href="/dashboard/create">
        
          <Button 
           
            variant="outline" 
            className="bg-purple-600 text-white hover:bg-purple-700 hover:shadow-md w-36 py-2 flex items-center justify-center gap-2 rounded-md font-semibold transition duration-300"
          >
            <FaPlus className="text-lg" /> Create 
            
          </Button>
          </Link>
        </div>
      </div>
      
    </>
  )
}

export default page
