
import { FaTwitter } from "react-icons/fa6";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { IoDocuments } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import { FaTags } from "react-icons/fa"; 
import { GiShare } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";

import Card from "@/components/card";


const data = [
  {
    title: 'Project Ideas',
    content: 'Future Projects:\n- Build a personal knowledge base\n- Create a habit tracker\n- Design a minimalist todo app',
    tags: ['productivity', 'ideas'],
    date: '10/03/2024',
  },
  {
    title: 'How to Build a Second Brain',
    content: 'No content available at the moment.',
    tags: ['productivity', 'learning'],
    date: '09/03/2024',
  },
  {
    title: 'Productivity Tip',
    content:
      'The best way to learn is to build in public. Share your progress, get feedback, and help others along the way.',
    tags: ['productivity', 'learning'],
    date: '08/03/2024',
  },
  {
    title: 'Productivity Tip',
    content:
      'The best way to learn is to build in public. Share your progress, get feedback, and help others along the way.',
    tags: ['productivity', 'learning'],
    date: '08/03/2024',
  },
  {
    title: 'Productivity Tip',
    content:
      'The best way to learn is to build in public. Share your progress, get feedback, and help others along the way.',
    tags: ['productivity', 'learning'],
    date: '08/03/2024',
  },
];

function routes() {
     
  return (
    <>
      
     <div className='main flex  p-5 h-screen   '>
     <div className="sidebar w-1/4 bg-slate-100 rounded-md p-5">
  <div className="heading text-black text-center text-2xl font-mono font-bold">
    <FaBrain className="inline-block align-middle text-2xl mr-2" /> 
    Secondery <span className="text-purple-500">Brain</span>
  </div>

  <div className="links justify-center text-gray-500 text-xl   font-bold mt-8 grid gap-8">
    <span className="flex items-center  text-gray-700">
      <FaTwitter className="text-xl mr-2" /> Tweets
    </span>
    <span className="flex items-center  text-gray-700">
      <PiLinkSimpleBold className="text-xl mr-3" /> Links
    </span>
    <span className="flex items-center  text-gray-700">
      <FaGithub className="text-xl mr-3" /> Git Repo's
    </span>
    <span className="flex items-center  text-gray-700">
      <FaYoutube className="text-xl mr-3" /> Videos
    </span>
    <span className="flex items-center  text-gray-700">
      <ImBlog className="text-xl mr-3" /> Blog's
    </span>
    <span className="flex items-center  text-gray-700">
      <IoDocuments className="text-xl mr-3" /> Documents
    </span>
    <span className="flex items-center  text-gray-700">
    <FaTags  className="text-xl mr-3" /> Tags
    </span>
  </div>
</div>

 
        
          <div className="leftBody p-5 w-full ml-2 bg-gray-100 rounded-md ">

             <div className="nav flex justify-between items-center">
               <div className="title  bold font-serif text-slate-900 text-2xl font-mono  font-bold">

                All Notes
               </div>

               <div className="buttons grid-cols-2">
               <Button  variant="secondary  " className="bg-purple-200 w-32" > <GiShare />Share Brain</Button>
               <Button variant="outline" className="ml-8 bg-purple-400 text-gray-900 font-mono text-lg" ><FaPlus />
               Create</Button>
              
                
               </div>

             </div>

             <div className="body mt-9">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, index) => (
        <Card

          key={index}
          title={item.title}
          content={item.content}
          tags={item.tags}
          date={item.date}
        />
      ))}
    </div>

             </div>


          </div>




     </div>

    </>
  )
}

export default routes



