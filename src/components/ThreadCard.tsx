
import { useState } from "react";
import { Link } from "react-router-dom";
import { Thread } from "../types";
import { MessageSquare, ThumbsUp, ThumbsDown, Save, Share } from "lucide-react";

interface ThreadCardProps {
  thread: Thread;
  showResponses?: boolean;
}

const ThreadCard = ({ thread, showResponses = false }: ThreadCardProps) => {
  const [saved, setSaved] = useState(thread.saved);
  const [likes, setLikes] = useState(thread.likes);
  const [dislikes, setDislikes] = useState(thread.dislikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-4">
      <Link to={`/thread/${thread.id}`}>
        <h2 className="text-xl font-semibold mb-2">{thread.title}</h2>
      </Link>
      
      <div className="flex items-center gap-3 mb-3">
        <img 
          src={thread.author.image} 
          alt={thread.author.name}
          className="w-10 h-10 rounded-md"
        />
        <div>
          <p className="font-medium">{thread.author.name}</p>
          <p className="text-sm text-gray-400">{thread.createdAt}</p>
        </div>
        <div className="ml-auto">
          <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-md text-xs font-medium">
            {thread.category}
          </span>
        </div>
      </div>
      
      <p className="mb-4">{thread.content}</p>
      
      <div className="flex items-center gap-3">
        <button className="rounded-md p-1">
          <Save 
            size={20} 
            className={saved ? "fill-white" : ""} 
            onClick={handleSave}
          />
        </button>
        
        <button className="flex items-center gap-2 rounded-md p-1">
          <MessageSquare size={20} />
          <span className="text-xs bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
            {thread.responses.length}
          </span>
        </button>
        
        <div className="flex items-center ml-auto">
          <button 
            className="flex items-center gap-1"
            onClick={handleLike}
          >
            <ThumbsUp size={20} />
            <span>{likes}</span>
          </button>
          
          <button 
            className="flex items-center gap-1 ml-2"
            onClick={handleDislike}
          >
            <ThumbsDown size={20} />
            <span>{dislikes}</span>
          </button>
        </div>
      </div>

      {showResponses && thread.responses.length > 0 && (
        <div className="mt-4 border-t border-gray-700 pt-4">
          {thread.responses.map((response) => (
            <div key={response.id} className="mt-3">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src={response.author.image} 
                  alt={response.author.name}
                  className="w-8 h-8 rounded-md"
                />
                <div>
                  <p className="font-medium">{response.author.name}</p>
                  <p className="text-xs text-gray-400">{response.createdAt}</p>
                </div>
              </div>
              <p className="ml-10">{response.content}</p>
              <div className="flex ml-10 mt-2">
                <button className="flex items-center gap-1">
                  <ThumbsUp size={16} />
                  <span className="text-sm">{response.likes}</span>
                </button>
                <button className="flex items-center gap-1 ml-2">
                  <ThumbsDown size={16} />
                  <span className="text-sm">{response.dislikes}</span>
                </button>
                <button className="ml-2">
                  <Share size={16} />
                </button>
                <button className="ml-auto">
                  <Save size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThreadCard;
