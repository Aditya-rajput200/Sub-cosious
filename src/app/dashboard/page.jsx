
"use client";

import { GiShare } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Card from "@/components/card";

const data = [
  {
    title: "Project Ideas",
    content: "Future Projects:\n- Build a personal knowledge base\n- Create a habit tracker\n- Design a minimalist todo app",
    tags: ["productivity", "ideas"],
    date: "10/03/2024",
  },
  {
    title: "How to Build a Second Brain",
    content: "No content available at the moment.",
    tags: ["productivity", "learning"],
    date: "09/03/2024",
  },
  {
    title: "Productivity Tip",
    content: "The best way to learn is to build in public. Share your progress, get feedback, and help others along the way.",
    tags: ["productivity", "learning"],
    date: "08/03/2024",
  },
];

export default function Page() {
  return (
    <>
      <div className="nav flex justify-between items-center  p-6 rounded-lg ">
  {/* Title */}
  <div className="title font-serif text-gray-800 font-extrabold text-3xl tracking-wide">
    📝 All Notes
  </div>
  
  {/* Buttons */}
  <div className="buttons flex gap-4">
    <Button 
      variant="secondary" 
      className="bg-white text-purple-600 hover:bg-purple-100 hover:shadow-md w-36 py-2 flex items-center justify-center gap-2 rounded-md font-semibold transition duration-300"
    >
      <GiShare className="text-lg" /> Share Brain
    </Button>
    <Button 
      variant="outline" 
      className="bg-purple-600 text-white hover:bg-purple-700 hover:shadow-md w-36 py-2 flex items-center justify-center gap-2 rounded-md font-semibold transition duration-300"
    >
      <FaPlus className="text-lg" /> Create
    </Button>
  </div>
</div>


      <div className="body mt-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <Card key={index} title={item.title} content={item.content} tags={item.tags} date={item.date} />
          ))}
        </div>
      </div>
    </>
  );
}
