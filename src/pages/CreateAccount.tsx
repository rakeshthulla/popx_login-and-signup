import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

const CreateAccount = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Account created successfully",
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
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">
          Create your PopX account
        </h1>
      </div>

      <div className="space-y-5 flex-1">
        <div className="space-y-2">
          <Label htmlFor="fullName">
            Full Name<span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">
            Phone number<span className="text-destructive">*</span>
          </Label>
          <Input
            id="phoneNumber"
            type="tel"
            placeholder="+91 1234567890"
            value={formData.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email address<span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">
            Password<span className="text-destructive">*</span>
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName">Company name</Label>
          <Input
            id="companyName"
            placeholder="Enter Company Name"
            value={formData.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
          />
        </div>

        <div className="space-y-3 pt-2">
          <Label>
            Are you an Agency?<span className="text-destructive">*</span>
          </Label>
          <RadioGroup
            value={formData.isAgency}
            onValueChange={(value) => handleChange("isAgency", value)}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes" className="font-normal text-foreground cursor-pointer">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no" className="font-normal text-foreground cursor-pointer">
                No
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <Button
        className="w-full mt-8"
        size="lg"
        onClick={handleSubmit}
        disabled={!formData.fullName || !formData.phoneNumber || !formData.email || !formData.password}
      >
        Create Account
      </Button>
      
      <p className="text-center text-sm text-muted-foreground mt-6 mb-8">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-primary font-semibold hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default CreateAccount;
