
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // In a real app, we would authenticate with a server
    // For demo purposes, we'll just navigate to the About page
    toast({
      title: "Success",
      description: "Welcome back!",
    });
    
    navigate("/about");
  };

  return (
    <div className="flex min-h-screen bg-[#1A1F2C]">
      {/* Left side - Gradient banner */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-pink-300 via-purple-400 to-blue-400 flex-col justify-center p-12">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/3643078d-e026-4cc8-9c94-04fe222cf4bc.png" 
            alt="Logo" 
            className="w-16 h-16"
          />
          <h2 className="text-xl font-semibold mt-2">ConnectForum.IO</h2>
        </div>

        <h1 className="text-4xl font-bold mb-4">ConnectForum – Where Ideas Spark and Conversations Thrive!</h1>
        
        <p className="text-lg mb-6">
          Join a vibrant community, share insights, and engage in meaningful discussions. Log in now and be part of the conversation!
        </p>
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-white mb-6">Login</h1>
          
          <p className="text-gray-400 mb-6">
            You can login with your registered account or quick login with your Google account.
          </p>

          {/* Google login button */}
          <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 py-3 px-4 rounded-md font-medium mb-6 hover:bg-gray-100 transition-colors">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
            Login with Google
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Email login form */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
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

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-gray-400">Password</label>
                <Link to="/forgot-password" className="text-gray-400 hover:text-blue-400">
                  Forgot Password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••••••••••"
                className="w-full bg-gray-800 border-gray-700"
              />
            </div>

            <div className="flex items-center mb-6">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 bg-gray-800 border-gray-700 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-400">
                Remember me
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-400 hover:bg-purple-500 text-white font-medium py-3 px-4 rounded-md mb-6"
            >
              Login
            </Button>
          </form>

          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-400 hover:underline">
              Create one!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
