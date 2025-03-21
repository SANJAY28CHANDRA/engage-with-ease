
import { useState } from "react";
import { Link } from "react-router-dom";
import { Thread } from "../types";
import { MessageSquare, ThumbsUp, ThumbsDown, Save, Share, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ThreadCardProps {
  thread: Thread;
  showResponses?: boolean;
  isLoggedIn?: boolean;
}

const ThreadCard = ({ thread, showResponses = false }: ThreadCardProps) => {
  const [saved, setSaved] = useState(thread.saved);
  const [likes, setLikes] = useState(thread.likes);
  const [dislikes, setDislikes] = useState(thread.dislikes);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [responses, setResponses] = useState(thread.responses);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleSave = () => {
    setSaved(!saved);
    toast({
      title: saved ? "Removed from saved" : "Saved successfully",
      description: saved ? "Thread removed from your saved items" : "Thread saved to your collection",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share",
      description: "Sharing functionality coming soon!",
    });
  };

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  const handleSubmitReply = () => {
    if (!replyContent.trim()) {
      toast({
        title: "Error",
        description: "Response cannot be empty",
        variant: "destructive",
      });
      return;
    }

    // Create a new response
    const newResponse = {
      id: `response-${Date.now()}`,
      content: replyContent,
      author: {
        id: "current-user",
        name: "Current User",
        email: "user@example.com",
        image: "/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png",
        role: "Member",
        bio: "I am a member of this community"
      },
      createdAt: "Just now",
      likes: 0,
      dislikes: 0
    };

    // Add the new response to the thread
    setResponses([...responses, newResponse]);
    
    // Clear the input and hide the form
    setReplyContent("");
    
    toast({
      title: "Success",
      description: "Your response has been added!",
    });
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
        <button 
          className="rounded-md p-1"
          onClick={handleSave}
        >
          <Save 
            size={20} 
            className={saved ? "fill-white" : ""} 
          />
        </button>
        
        <button 
          className="flex items-center gap-2 rounded-md p-1"
          onClick={toggleReplyForm}
        >
          <MessageSquare size={20} />
          <span className="text-xs bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
            {responses.length}
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
          
          <button 
            className="ml-2"
            onClick={handleShare}
          >
            <Share size={20} />
          </button>
        </div>
      </div>

      {/* Reply form that appears when message icon is clicked */}
      {showReplyForm && (
        <div className="mt-4 border-t border-gray-700 pt-4">
          <div className="flex items-center gap-2 mb-2">
            <img 
              src="/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png" 
              alt="Current user"
              className="w-8 h-8 rounded-md"
            />
            <p className="font-medium">Add your response</p>
          </div>
          <Textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder="Write your response..."
            className="w-full bg-gray-900 border border-gray-700 rounded-md p-2 mb-2 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows={3}
          />
          <div className="flex justify-end gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowReplyForm(false)}
            >
              Cancel
            </Button>
            <Button 
              className="bg-purple-400 hover:bg-purple-500"
              onClick={handleSubmitReply}
            >
              <Send size={16} className="mr-2" />
              Post Response
            </Button>
          </div>
        </div>
      )}

      {/* Show responses if enabled */}
      {showResponses && responses.length > 0 && (
        <div className="mt-4 border-t border-gray-700 pt-4">
          {responses.map((response) => (
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
                <button 
                  className="flex items-center gap-1"
                >
                  <ThumbsUp size={16} />
                  <span className="text-sm">{response.likes}</span>
                </button>
                <button 
                  className="flex items-center gap-1 ml-2"
                >
                  <ThumbsDown size={16} />
                  <span className="text-sm">{response.dislikes}</span>
                </button>
                <button 
                  className="ml-2"
                >
                  <Share size={16} />
                </button>
                <button 
                  className="ml-auto"
                >
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
