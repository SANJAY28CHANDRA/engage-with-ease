
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Search, HelpCircle, Book, MessageSquare, Settings, User } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./HelpPage.css";

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn] = useState(false);

  return (
    <MainLayout initialIsLoggedIn={isLoggedIn}>
      <div>
        <Header title="Help & Support">
          <p>Find answers to your questions and get assistance</p>
        </Header>

        <div className="search-container">
          <Search className="search-icon" size={20} />
          <Input
            type="text"
            placeholder="Search for help topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="help-categories">
          <Button variant="outline" className="category-button">
            <Book size={24} className="category-icon" />
            <span className="category-title">User Guides</span>
            <span className="category-subtitle">How to use the platform</span>
          </Button>
          
          <Button variant="outline" className="category-button">
            <MessageSquare size={24} className="category-icon" />
            <span className="category-title">Community Forum</span>
            <span className="category-subtitle">Ask the community</span>
          </Button>
          
          <Button variant="outline" className="category-button">
            <HelpCircle size={24} className="category-icon" />
            <span className="category-title">FAQ</span>
            <span className="category-subtitle">Frequently asked questions</span>
          </Button>
        </div>

        <div className="help-content">
          <div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="contact-space">
              <AccordionItem value="item-1" className="faq-item">
                <AccordionTrigger className="text-left py-4">How do I create an account?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-300">
                  To create an account, click on the "Login" button at the top of the page, 
                  then select "Register" option. Fill out the required information and submit the form.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="faq-item">
                <AccordionTrigger className="text-left py-4">How do I create a thread?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-300">
                  To create a thread, navigate to the Threads page and use the post creation area at the top. 
                  Enter your content and click the "POST" button. You must be logged in to create a thread.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="faq-item">
                <AccordionTrigger className="text-left py-4">How do I save a thread?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-300">
                  To save a thread, click the save icon (bookmark) on the thread you want to save. 
                  Saved threads can be accessed from the "Saved" section in the sidebar.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="faq-item">
                <AccordionTrigger className="text-left py-4">How do I create a community?</AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-300">
                  To create a community, click on the "Create Community" button in the sidebar. 
                  Fill in the details about your community and submit the form. You need to be logged in to create a community.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div>
            <h2 className="section-title">Get Help By Category</h2>
            <div className="contact-space">
              <Button variant="outline" className="help-category-button">
                <div className="help-category-icon-container">
                  <User size={20} className="help-category-icon" />
                  <span>Account & Profile</span>
                </div>
                <span className="help-category-arrow">→</span>
              </Button>
              
              <Button variant="outline" className="help-category-button">
                <div className="help-category-icon-container">
                  <MessageSquare size={20} className="help-category-icon" />
                  <span>Threads & Responses</span>
                </div>
                <span className="help-category-arrow">→</span>
              </Button>
              
              <Button variant="outline" className="help-category-button">
                <div className="help-category-icon-container">
                  <Settings size={20} className="help-category-icon" />
                  <span>Settings & Preferences</span>
                </div>
                <span className="help-category-arrow">→</span>
              </Button>
            </div>
            
            <div className="support-card">
              <h3 className="support-title">Still need help?</h3>
              <p className="support-text">
                If you couldn't find what you were looking for, please contact our support team.
              </p>
              <Button className="support-button">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HelpPage;
