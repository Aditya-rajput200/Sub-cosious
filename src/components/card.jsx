import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { GiShare } from "react-icons/gi";
import axios from "axios";

const port = process.env.NEXT_PUBLIC_PORT

const Card = ({ id, title, content, tags, date, link }) => {
  const [isLoading, setIsLoading]  = useState(false)
  const [metadata, setMetaData]  = useState([])

  useEffect(() => {

    extractMeta();
  }, []);

  // const handelDelete = (id) => {
  //   const deleteContent = async () => {
    
  //       alert("User not authenticated. Please log in again.");
  //       return;
    
  //     try {
    

  //       const response  = await axios.delete("http://localhost:${port}/api/v1/user/deleteContent/${id}",{
  //         headers: {
  //         "Content-Type" : "application/json"
  //         },withCredentials: true,
  //       });

  //       if (response.ok) {
  //         alert("Content deleted successfully");

  //         console.log("Content deleted");
  //       } else {
  //         const error = await response.json();
  //         console.error("Error:", error.message);
  //       }
  //     } catch (error) {
  //       console.error("Error deleting content:", error);
  //     }
  //   };

  //   deleteContent();
  // };

  const extractMeta = async () => {
    try {
      if (!link) {
        console.error("Link is not provided");
        return;
      }

      setIsLoading(true); // Set loading state
      const res = await axios.post(`http://localhost:${port}/api/v1/user/extract-data`, {
        url: link,
      });

      setMetaData(res.data);
      console.log("Metadata fetched:", res.data);
    } catch (error) {
      console.error("Error fetching metadata:", error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-white hover:bg-slate-100 shadow-md">
      
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-lg">{title}</h2>
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700">
            <GiShare />
          </button>
          <button
            className="text-gray-500 hover:text-gray-700"
            // onClick={() => handelDelete(id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex space-x-2 mb-2">
        {/* {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-purple-600 rounded-full px-2 py-1 text-sm"
          >
            #{tag}
          </span>
        ))} */}
      </div>

     
      <div className="meta mt-2">
        {isLoading ? (
          <p className="text-sm text-gray-500">Loading metadata...</p>
        ) : metadata ? (
          <>
            {metadata.title && <h3 className="text-lg font-bold">{metadata.title}</h3>}
            {metadata.description && (
              <p className="text-gray-600 text-sm">{metadata.description}</p>
              
            )}
            {metadata.ogImage &&  <img src={metadata.ogImage }alt="img" />  }
          </>
        ) : (
          <p className="text-sm text-gray-500">No metadata available</p>
        )}
      </div>
      <p className="text-gray-400 text-sm">Added on {date}</p>
    </div>
  );
};

export default Card;
