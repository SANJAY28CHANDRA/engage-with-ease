
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, LogIn, LogOut, User } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import "./Topbar.css";

interface TopbarProps {
  isLoggedIn?: boolean;
  onLoginStatusChange?: (status: boolean) => void;
}

const Topbar = ({ isLoggedIn = false, onLoginStatusChange }: TopbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      if (onLoginStatusChange) {
        onLoginStatusChange(true);
      }
    }
  }, [onLoginStatusChange]);

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
    // Clear user data and token from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    
    if (onLoginStatusChange) {
      onLoginStatusChange(false);
    }
    
    toast({
      title: "Success",
      description: "You have been logged out",
    });
    
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profile");
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
        
        {user ? (
          <div className="auth-buttons">
            <button 
              className="profile-button"
              onClick={handleProfileClick}
            >
              <User size={18} />
              {user.name}
            </button>
            <button 
              className="auth-button"
              onClick={handleLogoutClick}
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
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
