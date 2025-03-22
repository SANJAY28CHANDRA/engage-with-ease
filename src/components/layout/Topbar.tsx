
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Topbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Threads", path: "/threads" },
    { name: "Contact Us", path: "/contact" },
    { name: "Help and Support", path: "/help" }
  ];

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex-1 max-w-md">
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
      
      <div className="flex items-center">
        <div className="bg-blue-500 bg-opacity-20 rounded-lg px-6 py-2">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-2 py-1 ${
                  location.pathname === link.path
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <Button 
          className="ml-4 bg-purple-400 hover:bg-purple-500 flex items-center gap-2"
          onClick={handleLoginClick}
        >
          <LogIn size={18} />
          Login
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
