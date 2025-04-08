import { Button } from "@/components/ui/button";
import React from "react";

import BentoDemo from "./components/bentoDemo.jsx";
import TopBar from "./components/TopBar.jsx";
import IconButton from "./components/CustomButton.jsx";
import { Input } from "@/components/ui/input";
import URLCopyCompo from "./components/urlCopy.jsx";
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
        <div className="w-[90vw] flex flex-col gap-10">
          <div className="h-30 mt-[15vh] w-[100%]  flex flex-row items-center justify-center gap-10">
            <Input
              title="Email"
              type="email"
              placeholder="Yout input here "
              className="w-[40vw] rounded-full h-14"
            />
            <Button className="w-[10vw] rounded-full h-14"> Submit</Button>

          </div>
          <URLCopyCompo/>
      
          {/* <AspectRatio ratio={16 / 9} className="bg-green-300"> */}
          <BentoDemo />
          {/* /  </AspectRatio> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
