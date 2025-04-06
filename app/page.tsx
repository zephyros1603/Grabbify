import { Button } from "@/components/ui/button";
import React from "react";
// import AvatarDemo from "./components/avatar.js";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import BentoDemo from "./components/bentoDemo.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TopBar from "../app/components/TopBar.jsx";
import IconButton from "../app/components/CustomButton.jsx";
import { Input } from "@/components/ui/input";
function Home() {
  return (
    <div>
      <TopBar></TopBar>
      <div className="flex flex-row ">
        <div className="w-[10vw] h-[100vh]  flex flex-col items-center pt-[10vh] gap-10">
          <IconButton text={"Option"} />
          <IconButton text={"OPtion 2"} />
          <IconButton text={"OPtion 3"} />
        </div>
        <div className="w-[90vw] ">
          <div className="h-80 w-[100%]  flex flex-row items-center justify-center gap-10">
            <Input
              title="Email"
              type="email"
              placeholder="Yout input here "
              className="w-[40vw]"
            />
            <Button className="w-[10vw]"> Submit</Button>
          </div>
          {/* <AspectRatio ratio={16 / 9} className="bg-green-300"> */}
          <BentoDemo />
          {/* /  </AspectRatio> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
