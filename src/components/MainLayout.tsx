
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES, HAPPENING_NOW, TRENDING_TOPICS } from "../data/mockData";
import { Search, Users } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
  isLoggedIn?: boolean;
}

const MainLayout = ({ children, isLoggedIn = false }: MainLayoutProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen bg-[#1A1F2C] text-white font-sans">
      {/* Left Sidebar */}
      <div className="w-72 border-r border-gray-800 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-800">
          <img 
            src="/lovable-uploads/3643078d-e026-4cc8-9c94-04fe222cf4bc.png" 
            alt="ConnectForum" 
            className="w-12 h-12"
          />
          <div>
            <h1 className="font-semibold text-lg">ConnectForum.io</h1>
            <p className="text-xs text-gray-400">Platform Discussion</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2 p-4">
          <Link to="/profile" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <Users size={18} />
            </div>
            <span>Profile</span>
          </Link>
          <Link to="/threads" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-xl">#</span>
            </div>
            <span>Your Threads</span>
          </Link>
          <Link to="/saved" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-xl">📑</span>
            </div>
            <span>Saved</span>
          </Link>
        </nav>

        {/* Categories */}
        <div className="p-4 border-t border-gray-800">
          <h3 className="text-lg font-bold mb-3">Categories</h3>
          <div className="flex flex-col gap-2">
            {CATEGORIES.map((category) => (
              <Link 
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`}
                className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md"
              >
                <div className={`w-8 h-8 ${category.color} rounded-md`}></div>
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Create Community Button */}
        <div className="p-4">
          <Link 
            to="/create-community" 
            className="flex items-center gap-2 p-2 bg-gray-800 rounded-md hover:bg-gray-700"
          >
            <div className="w-8 h-8 bg-white text-black rounded-md flex items-center justify-center font-bold">
              +
            </div>
            <span>Create Community</span>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="mt-auto p-4 border-t border-gray-800">
          <div className="flex gap-4 mb-4">
            <Link to="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-xl">🚀</span>
            </Link>
            <Link to="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-xl">𝕏</span>
            </Link>
            <Link to="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-xl">📷</span>
            </Link>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>©2023</p>
            <p>ConnectForum. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <div className="flex-1 max-w-4xl">
          {/* Search Bar */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex-1 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Explore..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 bg-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-6">
            {children}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 border-l border-gray-800 flex flex-col p-4">
          {isLoggedIn ? (
            <Link to="/logout" className="block p-4 mb-4 bg-gray-800 rounded-lg text-center hover:bg-gray-700">
              LogOut
            </Link>
          ) : (
            <Link to="/login" className="block p-4 mb-4 bg-gray-800 rounded-lg text-center hover:bg-gray-700">
              Login
            </Link>
          )}

          {/* Trending Topics */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-medium">Trending Topics</h3>
              <Users size={18} />
            </div>
            <div className="space-y-2">
              {TRENDING_TOPICS.map((topic) => (
                <div key={topic.name} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-300 rounded-full"></div>
                  <span className="text-sm">{topic.name}</span>
                </div>
              ))}
              <button className="text-sm text-gray-400 hover:text-white">see more</button>
            </div>
          </div>

          {/* What's Happening */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-medium">Whats Happenning?</h3>
              <span className="text-xl">🔔</span>
            </div>
            <div className="space-y-2">
              {HAPPENING_NOW.map((topic) => (
                <div key={topic} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xl">#</span>
                    <span className="text-sm">{topic}</span>
                  </div>
                  <span className="text-sm text-gray-400">6h ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
