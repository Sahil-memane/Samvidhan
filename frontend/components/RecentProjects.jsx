"use client";
import dynamic from "next/dynamic";

import { FaLocationArrow } from "react-icons/fa6";
import { Suspense } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className=" items-center justify-center">
       <h1 className="text-5xl font-bold text-center ">
                Project Features
            </h1>

      <div className=" grid grid-cols-3 grid-rows-2 items-center justify-center ml-32">
      <Suspense fallback={<div>Loading projects...</div>}>

        {projects.map((item) => (
          <Link href={item.link}>
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] px-10"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
              
            >
              

              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden object-cover h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute top-0 left-0 w-full h-full object-cover "
                />
              </div>

              <h1 className="text-black font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="text-black lg:text-lg lg:font-normal text-sm "
                style={{
                  color: "#111111",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
            </PinContainer>
          </div>
    </Link>
        ))}
        </Suspense>
      </div>
    </div>
  );
};

export default RecentProjects;
