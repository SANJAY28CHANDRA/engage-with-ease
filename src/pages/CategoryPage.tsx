
import { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import ThreadCard from "../components/ThreadCard";
import { MOCK_THREADS } from "../data/mockData";
import { Smile, Bold, Italic, List, ListOrdered, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import Header from "../components/Header";
import { Thread } from "../types";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [newPost, setNewPost] = useState("");
  
  // Format category name for display
  const formattedCategoryName = categoryName
    ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    : "Category";

  // Filter threads based on category
  const filteredThreads = MOCK_THREADS.filter(
    thread => thread.category.toLowerCase() === categoryName?.toLowerCase()
  );
  
  const [categoryThreads, setCategoryThreads] = useState(filteredThreads);

  const handlePost = () => {
    if (!newPost.trim()) {
      toast({
        title: "Error",
        description: "Post content cannot be empty",
        variant: "destructive",
      });
      return;
    }

    // Create new thread with the post content
    const newThread: Thread = {
      id: `thread-${Date.now()}`,
      title: `${formattedCategoryName} Discussion`,
      content: newPost,
      author: {
        id: "current-user",
        name: "Current User",
        email: "user@example.com",
        image: "/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png",
        role: "Member",
        bio: "I am a member of this community"
      },
      createdAt: "Just now",
      category: formattedCategoryName,
      likes: 0,
      dislikes: 0,
      responses: [],
      saved: false
    };

    // Add the new thread to the top of the threads list
    setCategoryThreads([newThread, ...categoryThreads]);

    toast({
      title: "Success",
      description: "Your post has been created!",
    });

    setNewPost("");
  };

  return (
    <MainLayout>
      <div>
        <Header title={formattedCategoryName}>
          <p>Explore discussions related to {formattedCategoryName}</p>
        </Header>

        {/* Create Post Area */}
        <div className="create-post-area">
          <div className="create-post-header">
            <img 
              src="/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png" 
              alt="User avatar" 
              className="user-avatar"
            />
            <textarea
              placeholder={`What's on your mind about ${formattedCategoryName}?`}
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="post-textarea"
              rows={1}
            />
          </div>
          
          <div className="post-actions">
            <div className="formatting-buttons">
              <button className="format-button">
                <Smile size={20} />
              </button>
              <button className="format-button">
                <Bold size={20} />
              </button>
              <button className="format-button">
                <Italic size={20} />
              </button>
              <button className="format-button">
                <List size={20} />
              </button>
              <button className="format-button">
                <ListOrdered size={20} />
              </button>
              <button className="format-button">
                <Link2 size={20} />
              </button>
            </div>
            
            <Button 
              className="post-button"
              onClick={handlePost}
            >
              POST
            </Button>
          </div>
        </div>
        
        {/* Threads */}
        <div>
          {categoryThreads.length > 0 ? (
            categoryThreads.map((thread) => (
              <ThreadCard key={thread.id} thread={thread} showResponses={true} />
            ))
          ) : (
            <div className="empty-state">
              <h3 className="empty-state-title">No discussions yet</h3>
              <p className="empty-state-text">Be the first to start a discussion in this category!</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoryPage;
