import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate login
    toast({
      title: "Success",
      description: "Logged in successfully",
    });
    navigate("/account");
  };

  return (
    <div className="flex flex-col min-h-screen p-8">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigate("/")}
        className="self-start mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>
      
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-3">
          Signin to your PopX account
        </h1>
        <p className="text-muted-foreground text-base">
          Welcome back! Please enter your details.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          className="w-full mt-8"
          size="lg"
          onClick={handleLogin}
          disabled={!email || !password}
        >
          Login
        </Button>
        
        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/create-account")}
            className="text-primary font-semibold hover:underline"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
