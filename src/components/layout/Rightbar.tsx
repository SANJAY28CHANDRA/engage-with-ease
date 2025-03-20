
import { Link, useNavigate } from "react-router-dom";
import { TRENDING_TOPICS, HAPPENING_NOW } from "../../data/mockData";
import { Users, Bell, ExternalLink } from "lucide-react";

interface RightbarProps {
  isLoggedIn: boolean;
}

const Rightbar = ({ isLoggedIn }: RightbarProps) => {
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-80 border-l border-gray-800 flex flex-col p-4">
      <button 
        onClick={handleAuthAction}
        className="block p-4 mb-4 bg-gray-800 rounded-lg text-center hover:bg-gray-700"
      >
        {isLoggedIn ? "LogOut" : "Login"}
      </button>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-medium">Trending Topics</h3>
          <Users size={18} />
        </div>
        <div className="space-y-2">
          {TRENDING_TOPICS.map((topic) => (
            <Link 
              key={topic.name} 
              to={`/topic/${topic.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md group"
            >
              <div className="w-8 h-8 bg-green-300 rounded-full"></div>
              <span className="text-sm flex-1">{topic.name}</span>
              <ExternalLink size={14} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
          <button className="text-sm text-gray-400 hover:text-white ml-2">see more</button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-medium">Whats Happenning?</h3>
          <Bell size={18} />
        </div>
        <div className="space-y-2">
          {HAPPENING_NOW.map((topic) => (
            <Link 
              key={topic} 
              to={`/topic/${topic.toLowerCase().replace(/\s+/g, '-').replace('-', '')}`}
              className="flex items-center justify-between p-2 hover:bg-gray-800 rounded-md group"
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xl">#</span>
                <span className="text-sm">{topic}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">6h ago</span>
                <ExternalLink size={14} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
