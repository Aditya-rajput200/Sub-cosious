import { FaTwitter, FaGithub, FaYoutube, FaTags, FaPlus, FaBrain } from "react-icons/fa6";
import { PiLinkSimpleBold } from "react-icons/pi";
import { ImBlog } from "react-icons/im";
import { IoDocuments, IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="main flex p-5 h-screen">
      {/* Sidebar */}

      <div className="sidebar w-1/4 bg-slate-100 rounded-md p-5">
        <div className="heading text-black text-center text-2xl font-mono font-bold">
          <Link href="/dashboard">
            <FaBrain className="inline-block align-middle text-2xl mr-2" />
            Secondary <span className="text-purple-500">Brain</span>
          </Link>
        </div>

        <div className="links justify-center text-gray-500 text-xl font-bold mt-8 grid gap-8">
          <Link href="/dashboard/tweets" className="flex items-center text-gray-700 hover:text-purple-500">
            <FaTwitter className="text-xl mr-2" /> Tweets
          </Link>
          <Link href="/dashboard/links" className="flex items-center text-gray-700 hover:text-purple-500">
            <PiLinkSimpleBold className="text-xl mr-3" /> Links
          </Link>
          <Link href="/dashboard/github" className="flex items-center text-gray-700 hover:text-purple-500">
            <FaGithub className="text-xl mr-3" /> Git Repos
          </Link>
          <Link href="/dashboard/videos" className="flex items-center text-gray-700 hover:text-purple-500">
            <FaYoutube className="text-xl mr-3" /> Videos
          </Link>
          <Link href="/dashboard/blogs" className="flex items-center text-gray-700 hover:text-purple-500">
            <ImBlog className="text-xl mr-3" /> Blogs
          </Link>
          <Link href="/dashboard/documents" className="flex items-center text-gray-700 hover:text-purple-500">
            <IoDocuments className="text-xl mr-3" /> Documents
          </Link>
          <Link href="/dashboard/tags" className="flex items-center text-gray-700 hover:text-purple-500">
            <FaTags className="text-xl mr-3" /> Tags
          </Link>
          <Link href="/dashboard/settings" className="flex items-center text-gray-700 hover:text-purple-500">
            <IoSettingsSharp className="text-xl mr-3" /> Settings
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="leftBody p-5 w-full ml-2 bg-gray-100 rounded-md">{children}</div>
    </div>
  );
}
