
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, LogIn, LogOut } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import "./Topbar.css";

interface TopbarProps {
  isLoggedIn?: boolean;
  onLoginStatusChange?: (status: boolean) => void;
}

const Topbar = ({ isLoggedIn = false, onLoginStatusChange }: TopbarProps) => {
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

  const handleLogoutClick = () => {
    if (onLoginStatusChange) {
      onLoginStatusChange(false);
    }
    toast({
      title: "Success",
      description: "You have been logged out",
    });
  };

  return (
    <div className="topbar">
      <div className="search-container">
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Explore..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      
      <div className="navigation">
        <div className="nav-container">
          <nav className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {isLoggedIn ? (
          <button 
            className="auth-button"
            onClick={handleLogoutClick}
          >
            <LogOut size={18} />
            Logout
          </button>
        ) : (
          <button 
            className="auth-button"
            onClick={handleLoginClick}
          >
            <LogIn size={18} />
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Topbar;
