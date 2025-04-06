"use client";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  ExitIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { useState } from "react";
import ParameterTable from "../components/table.jsx";
const features = [
  {
    Icon: FileTextIcon,
    name: "Name 1",
    description: "description 1",

    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Name 2",
    description: "description 2",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Name 3",
    description: "description 3",

    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Name 4",
    description: "description 5",

    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
];

{
}
export default function BentoDemo() {
  const [clicked, setclicked] = useState(false);
  function bentoclickFunction(event) {
    console.log("clicked");
    setclicked(!clicked);
    console.log(clicked);
  }

  function TablesShow() {
    return (
      <div
        className="absolute  w-[80vw] h-[80vh] bg-white/30 backdrop-blur-md border-2 z-50
        rounded-4xl p-10
        top-[20vh] scroll-m-5"
      >
        <span className="absolute right-10 text-8xl" onClick={bentoclickFunction}>
          <ExitIcon width={30} height={30}/>
        </span>
        <div
        className="overflow-y-scroll h-[70vh] w-full mt-12
        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
        scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        ><ParameterTable/></div>
      </div>
    );
  }

  // function bentoclickFunction
  return (
    <div className="flex justify-center items-center">
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
        <BentoCard
          Icon={BellIcon}
          name={"Show all"}
          description={"Discover more parameters ? click here !"}
          href={"/"}
          className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
          onClick={bentoclickFunction}
        />
      </BentoGrid>
      {clicked && <TablesShow />}
    </div>
  );
}
