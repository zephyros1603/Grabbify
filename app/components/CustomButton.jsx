"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Option } from "lucide-react";

const CustomButton = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Main Button */}
      <Button
        className="flex items-center justify-start w-14 h-10  text-white 
        rounded-full transition-all duration-300 ease-in-out overflow-hidden 
        hover:w-32 hover:rounded-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon */}
        <span className="flex items-center justify-center w-10 h-10  rounded-full">
          <Option className="text-white" />
        </span>

        {/* Text */}
        {isHovered && (
        <span
          className="ml-2 whitespace-nowrap transition-opacity duration-300 
          "
        >
          {text}
        </span>)}
      </Button>

      {/* Secondary Button */}
      
      
    </div>
  );
};

export default CustomButton;