
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import ThreadCard from "../components/ThreadCard";
import { MOCK_THREADS } from "../data/mockData";
import { Smile, Bold, Italic, List, ListOrdered, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import Header from "../components/Header";

const TopicPage = () => {
  const { topicName } = useParams<{ topicName: string }>();
  const [newPost, setNewPost] = useState("");
  const navigate = useNavigate();
  
  // For demo purposes, controlling login state
  const isLoggedIn = false;

  // Format topic name for display
  const formattedTopicName = topicName
    ? topicName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : "Topic";

  // For demo purposes, we'll just show all threads
  // In a real app, you would filter threads based on the topic
  const topicThreads = MOCK_THREADS;

  const handlePost = () => {
    if (!isLoggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please login to create a post",
        variant: "destructive",
      });
      setTimeout(() => navigate("/login"), 1500);
      return;
    }
    
    // If the user is logged in, we skip the authentication notification
    // and only check if the post content is empty
    if (!newPost.trim()) {
      toast({
        title: "Error",
        description: "Post content cannot be empty",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Your post has been created!",
    });

    setNewPost("");
  };

  return (
    <MainLayout isLoggedIn={isLoggedIn}>
      <div>
        <Header title={formattedTopicName}>
          <p>Join the conversation about {formattedTopicName}</p>
        </Header>

        {/* Create Post Area */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <img 
              src="/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png" 
              alt="User avatar" 
              className="w-10 h-10 rounded-md"
            />
            <textarea
              placeholder={`Share your thoughts about ${formattedTopicName}...`}
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-700 rounded-md p-2 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
              rows={1}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <button className="text-gray-400 hover:text-white">
                <Smile size={20} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Bold size={20} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Italic size={20} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <List size={20} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <ListOrdered size={20} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Link2 size={20} />
              </button>
            </div>
            
            <Button 
              className="bg-purple-400 hover:bg-purple-500 px-6"
              onClick={handlePost}
            >
              POST
            </Button>
          </div>
        </div>
        
        {/* Threads */}
        <div>
          {topicThreads.length > 0 ? (
            topicThreads.map((thread) => (
              <ThreadCard key={thread.id} thread={thread} showResponses={true} isLoggedIn={isLoggedIn} />
            ))
          ) : (
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-2">No discussions yet</h3>
              <p className="text-gray-400">Be the first to start a discussion about this topic!</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default TopicPage;
