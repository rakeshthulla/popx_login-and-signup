import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen p-8">
      <div className="flex items-center mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold text-foreground">
          Account Settings
        </h1>
      </div>

      <div className="flex items-start gap-4 mb-6">
        <div className="relative">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg" alt="Marry Doe" />
            <AvatarFallback className="bg-muted text-foreground text-xl">MD</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1.5">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary-foreground"
            >
              <path
                d="M2 10V8.5L8.5 2L10 3.5L3.5 10H2Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-foreground">rakesh</h2>
          <p className="text-sm text-muted-foreground">Rakesh@Gmail.Com</p>
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <p className="text-muted-foreground text-sm leading-relaxed">
          hello this is Rakesh i am a software developer with a passion for creating intuitive and dynamic user experiences. With a background in computer science and several years of experience in the tech industry, I specialize in front-end development and UI/UX design. In my free time, I enjoy exploring new technologies, contributing to open-source projects, and hiking in the great outdoors.
        </p>
      </div>
    </div>
  );
};

export default Account;
