import React from "react";
// import AvatarDemo from "../../app/components/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


function TopBar() {
  return (
    <div
      className="w-[100vw] h-[20vh] 
"
    >
      
      <AspectRatio
        ratio={20 / 1}
        className="  lg:flex flex-row-reverse p-4 gap-2 hidden relative"
      >
        
        <div className="rounded-full translate-y-2">
        
          <Avatar className="w-12 h-12 rounded-full" style={{ width: "50px", height: "50px" ,
            borderRadius: "50%",
          }}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"
            className="rounded-full"
            style={{ width: "50px", height: "50px" }}
            />
            <AvatarFallback className="rounded-full">CN</AvatarFallback>
          </Avatar>
          </div>
        <InteractiveHoverButton className=" text-black translate-y-4">
          <span>Login</span>
        </InteractiveHoverButton>
        <h1 className="text-6xl font-stretch-200% font-black absolute left-0 m-1 ml-10">
        Grabbify
      </h1>
      </AspectRatio>
      {/* <AspectRatio ratio={20 / 4} className=" bg-blue-300 flex flex-row-reverse p-4 gap-2 lg:hidden" >
        <AvatarDemo  />
        <InteractiveHoverButton className="bg-blue-500 text-white ">
    <span>Login</span>
  </InteractiveHoverButton>
      </AspectRatio> */}
      {/* commented code for responsive */}
      <h1 className="text-3xl font-stretch-125%  mt-10 ml-[10vw]">
        DashBoard
      </h1>
    </div>
  );
}

export default TopBar;
