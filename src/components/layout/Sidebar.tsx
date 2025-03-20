
import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CATEGORIES } from "../../data/mockData";
import { Users } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface SidebarProps {
  isLoggedIn: boolean;
}

const Sidebar = ({ isLoggedIn }: SidebarProps) => {
  const navigate = useNavigate();

  const handleAuthLink = (e: React.MouseEvent<HTMLAnchorElement>, destination: string, actionName: string) => {
    if (!isLoggedIn) {
      e.preventDefault();
      toast({
        title: "Authentication Required",
        description: `Please login to ${actionName}`,
        variant: "destructive",
      });
      setTimeout(() => navigate("/login"), 1500);
    }
  };

  return (
    <div className="w-72 border-r border-gray-800 flex flex-col">
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

      <nav className="flex flex-col gap-2 p-4">
        <Link 
          to="/profile" 
          className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md"
          onClick={(e) => handleAuthLink(e, "/profile", "view your profile")}
        >
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <Users size={18} />
          </div>
          <span>Profile</span>
        </Link>
        <Link 
          to="/profile" 
          className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md"
          onClick={(e) => handleAuthLink(e, "/profile", "view your threads")}
        >
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-xl">#</span>
          </div>
          <span>Your Threads</span>
        </Link>
        <Link 
          to="/saved" 
          className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md"
          onClick={(e) => handleAuthLink(e, "/saved", "view your saved threads")}
        >
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-xl">📑</span>
          </div>
          <span>Saved</span>
        </Link>
      </nav>

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

      <div className="p-4">
        <Link 
          to="/create-community" 
          className="flex items-center gap-2 p-2 bg-gray-800 rounded-md hover:bg-gray-700"
          onClick={(e) => handleAuthLink(e, "/create-community", "create a community")}
        >
          <div className="w-8 h-8 bg-white text-black rounded-md flex items-center justify-center font-bold">
            +
          </div>
          <span>Create Community</span>
        </Link>
      </div>

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
  );
};

export default Sidebar;
