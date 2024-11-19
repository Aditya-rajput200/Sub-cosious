
// Card.js
import React from 'react';
import { MdDelete } from "react-icons/md";
import { GiShare } from "react-icons/gi";
const Card = ({ title, content, tags, date }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-lg">{title}</h2>
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700">
          <GiShare />
            <i className="icon-share" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
          <MdDelete />

            <i className="icon-delete" />
          </button>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex space-x-2 mb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-gray-400 text-sm">Added on {date}</p>
    </div>
  );
};

export default Card;
