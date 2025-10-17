import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import "./welcome.css";

const DecorativeDots = () => {
  const dots = [6, 1, 2, 3, 4, 5];

  return (
    <div className="decorative-dots">
      {dots.map((n, i) => (
        <div key={i} className="dot">{n}</div>
      ))}
    </div>
  );
};

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-root">
      <DecorativeDots />

      <div className="flex flex-col justify-between min-h-screen px-6 py-8">
        <div />

        <div className="welcome-content">
          <h1 className="welcome-hero-title">Welcome to PopX</h1>
          <p className="welcome-hero-sub">Hey there! Ready to experience PopX magic? Let’s get started!</p>

          <div className="space-y-3">
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white"
              size="lg"
              onClick={() => navigate("/create-account")}
            >
              Create Account
            </Button>

            <Button
              className="w-full"
              variant="secondary"
              size="lg"
              onClick={() => navigate("/login")}
            >
              Already Registered? Login
            </Button>
          </div>
        </div>

        <div />
      </div>
    </div>
  );
};

export default Welcome;
