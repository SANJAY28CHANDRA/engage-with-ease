
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (!agreeTerms) {
      toast({
        title: "Error",
        description: "You must agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    // In a real app, we would register with a server
    // For demo purposes, we'll just navigate to the login page
    toast({
      title: "Success",
      description: "Account created successfully!",
    });
    
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1A1F2C] p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Register</h1>
        
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Yayan Cool"
              className="w-full bg-gray-800 border-gray-700"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yayan@durian.cc"
              className="w-full bg-gray-800 border-gray-700"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-gray-400 mb-2">Password</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••••••••••"
              className="w-full bg-gray-800 border-gray-700"
            />
          </div>
          
          <div className="flex items-center">
            <input
              id="agree-terms"
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-4 h-4 bg-gray-800 border-gray-700 rounded"
            />
            <label htmlFor="agree-terms" className="ml-2 text-gray-400">
              Agree with terms and conditions
            </label>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-purple-400 hover:bg-purple-500 text-white font-medium py-3 px-4 rounded-md"
          >
            Register
          </Button>
        </form>
        
        <p className="text-center text-gray-400 mt-6">
          Have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
