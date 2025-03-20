import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import ThreadCard from "../components/ThreadCard";
import { MOCK_THREADS } from "../data/mockData";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share, Save, MessageSquare } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import Header from "../components/Header";

const ResponsePage = () => {
  const { id } = useParams();
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  
  // For demo purposes, controlling login state
  const isLoggedIn = false;
  
  // Find the thread by ID, fallback to the first thread if not found
  const thread = MOCK_THREADS.find(t => t.id === id) || MOCK_THREADS[0];

  const handleAddResponse = () => {
    if (!isLoggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please login to respond to this thread",
        variant: "destructive",
      });
      setTimeout(() => navigate("/login"), 1500);
      return;
    }
    
    if (!response.trim()) {
      toast({
        title: "Error",
        description: "Response cannot be empty",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Your response has been added!",
    });

    // In a real app, we would add the response to the database
    // For demo purposes, we'll just clear the input
    setResponse("");
  };

  return (
    <MainLayout isLoggedIn={isLoggedIn}>
      <div>
        <Header title="Thread Responses">
          <p>Join the conversation by adding your thoughts</p>
        </Header>
        
        <ThreadCard thread={thread} isLoggedIn={isLoggedIn} />
        
        {/* Responses */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Responses</h2>
          
          {thread.responses.map((response, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <img 
                  src={response.author.image} 
                  alt={response.author.name}
                  className="w-10 h-10 rounded-md"
                />
                <div>
                  <p className="font-medium">{response.author.name}</p>
                  <p className="text-sm text-gray-400">{response.createdAt}</p>
                </div>
              </div>
              
              <p className="mb-4">{response.content}</p>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1">
                  <ThumbsUp size={18} />
                  <span>{response.likes}</span>
                </button>
                
                <button className="flex items-center gap-1">
                  <ThumbsDown size={18} />
                  <span>{response.dislikes}</span>
                </button>
                
                <button>
                  <Share size={18} />
                </button>
                
                <button className="ml-auto">
                  <Save size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Add Response */}
        <div className="mt-8 bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Add Response</h2>
          
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare size={20} />
            <span className="text-gray-400">Add response</span>
          </div>
          
          <textarea
            placeholder="Write your response..."
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 mb-4 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows={4}
          />
          
          <div className="flex justify-end">
            <Button 
              className="bg-purple-400 hover:bg-purple-500"
              onClick={handleAddResponse}
            >
              Post Response
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResponsePage;
