"use client";

import { GiShare } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Card from "@/components/card";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";



export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const result = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/user/fetchAllContent", {
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
  

  useEffect(() => {
    if (token) {
      result();
    }
  }, [token]);

 

  return (
    <>
      <div className="nav flex justify-between items-center p-6 rounded-lg ">
        <div className="title font-serif text-gray-800 font-extrabold text-3xl tracking-wide">
          📝 All Notes
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {Array.isArray(data) && data.map((item, index) => (
    <Card 
      key={ index} 
      id={item.id}
      title={item.title} 
      content={item.description || "No content available"} 
      tags={[item.type]} 
      link = {item.link}
      date={new Date(item.createdAt).toLocaleDateString()} 
    />
  ))}
</div>


    </>
  );
}
