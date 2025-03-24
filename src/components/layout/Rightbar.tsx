
import { Link } from "react-router-dom";
import { TRENDING_TOPICS, HAPPENING_NOW } from "../../data/mockData";
import { Users, Bell, ExternalLink } from "lucide-react";
import "./Rightbar.css";

interface RightbarProps {
  isLoggedIn?: boolean;
}

const Rightbar = ({ isLoggedIn }: RightbarProps) => {
  return (
    <div className="rightbar">
      <div className="rightbar-section">
        <div className="section-header">
          <h3 className="section-title">Trending Topics</h3>
          <Users size={18} />
        </div>
        <div className="topic-list">
          {TRENDING_TOPICS.map((topic) => (
            <Link 
              key={topic.name} 
              to={`/topic/${topic.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="topic-item"
            >
              <div className="topic-avatar"></div>
              <span className="topic-name">{topic.name}</span>
              <ExternalLink size={14} className="topic-icon" />
            </Link>
          ))}
          <button className="more-link">see more</button>
        </div>
      </div>

      <div className="rightbar-section">
        <div className="section-header">
          <h3 className="section-title">Whats Happenning?</h3>
          <Bell size={18} />
        </div>
        <div className="topic-list">
          {HAPPENING_NOW.map((topic) => (
            <Link 
              key={topic} 
              to={`/topic/${topic.toLowerCase().replace(/\s+/g, '-').replace('-', '')}`}
              className="happening-item"
            >
              <div className="happening-content">
                <span className="hashtag">#</span>
                <span className="happening-title">{topic}</span>
              </div>
              <div className="happening-meta">
                <span className="happening-time">6h ago</span>
                <ExternalLink size={14} className="happening-icon" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
