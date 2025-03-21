
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import ThreadCard from "../components/ThreadCard";
import { MOCK_THREADS } from "../data/mockData";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share, Save, MessageSquare, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import Header from "../components/Header";
import { Response } from "../types";

const ResponsePage = () => {
  const { id } = useParams();
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  
  // Find the thread by ID, fallback to the first thread if not found
  const thread = MOCK_THREADS.find(t => t.id === id) || MOCK_THREADS[0];
  const [responses, setResponses] = useState(thread.responses);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const handleAddResponse = () => {
    if (!response.trim()) {
      toast({
        title: "Error",
        description: "Response cannot be empty",
        variant: "destructive",
      });
      return;
    }

    // Create a new response
    const newResponse: Response = {
      id: `response-${Date.now()}`,
      content: response,
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

    // Add the new response
    setResponses([...responses, newResponse]);
    setResponse("");

    toast({
      title: "Success",
      description: "Your response has been added!",
    });
  };

  const toggleReplyForm = (responseId: string) => {
    if (replyingTo === responseId) {
      setReplyingTo(null);
      setReplyContent("");
    } else {
      setReplyingTo(responseId);
      setReplyContent("");
    }
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
    const newResponse: Response = {
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

    // Add the new response
    setResponses([...responses, newResponse]);
    
    // Reset state
    setReplyingTo(null);
    setReplyContent("");

    toast({
      title: "Success",
      description: "Your reply has been added!",
    });
  };

  return (
    <MainLayout>
      <div>
        <Header title="Thread Responses">
          <p>Join the conversation by adding your thoughts</p>
        </Header>
        
        <ThreadCard thread={thread} />
        
        {/* Responses */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Responses</h2>
          
          {responses.map((response) => (
            <div key={response.id} className="bg-gray-800 rounded-lg p-4 mb-4">
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
                
                <button 
                  className="flex items-center gap-1"
                  onClick={() => toggleReplyForm(response.id)}
                >
                  <MessageSquare size={18} />
                </button>
                
                <button>
                  <Share size={18} />
                </button>
                
                <button className="ml-auto">
                  <Save size={18} />
                </button>
              </div>

              {/* Reply form for this specific response */}
              {replyingTo === response.id && (
                <div className="mt-4 border-t border-gray-700 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <img 
                      src="/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png" 
                      alt="Current user"
                      className="w-8 h-8 rounded-md"
                    />
                    <p className="font-medium">Reply to {response.author.name}</p>
                  </div>
                  <Textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Write your reply..."
                    className="w-full bg-gray-900 border border-gray-700 rounded-md p-2 mb-2 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                    rows={3}
                  />
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => setReplyingTo(null)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="bg-purple-400 hover:bg-purple-500"
                      onClick={handleSubmitReply}
                    >
                      <Send size={16} className="mr-2" />
                      Post Reply
                    </Button>
                  </div>
                </div>
              )}
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
          
          <Textarea
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
              <Send size={16} className="mr-2" />
              Post Response
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResponsePage;
