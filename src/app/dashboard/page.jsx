"use client";

import { GiShare } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Card from "@/components/card";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const port = process.env.NEXT_PUBLIC_PORT || 3000; // Default to 3000 if not set

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const result = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:${port}/api/v1/user/fetchAllContent`, {
        headers: {
        "Content-Type" : "application/json"
        },withCredentials: true,
      });
      
      setData(response.data.data);
      setError(null); // Clear any previous error
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again later.");
      setData([]);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
  
      result();
    
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <div className="nav flex justify-between items-center p-6 rounded-lg">
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

      {error && <div className="text-red-500">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              content={item.description || "No content available"}
              types={[item.type]}
              tags={item.tags}
              link={item.link}
              date={new Date(item.createdAt).toLocaleDateString()}
            />
          ))}
      </div>
    </>
  );
}
