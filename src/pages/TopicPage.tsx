
import { useState } from "react";
import { useParams } from "react-router-dom";
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
  
  // Format topic name for display
  const formattedTopicName = topicName
    ? topicName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : "Topic";

  // Filter threads based on the topic's formatted name
  // This now handles both Trending Topics and What's Happening
  const topicThreads = MOCK_THREADS.filter(thread => {
    const threadCategory = thread.category.toLowerCase();
    const searchTopic = formattedTopicName.toLowerCase();
    return threadCategory === searchTopic || 
           thread.title.toLowerCase().includes(searchTopic) || 
           thread.content.toLowerCase().includes(searchTopic);
  });

  const handlePost = () => {
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
    <MainLayout isLoggedIn={true}>
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
              <ThreadCard key={thread.id} thread={thread} showResponses={true} isLoggedIn={true} />
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
