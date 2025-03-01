import React from "react";
// import { MdPhishing } from "react-icons/md";
// import { PiPasswordFill } from "react-icons/pi";
// import { AiOutlineFileProtect } from "react-icons/ai";
// import { MdPeopleAlt } from "react-icons/md";
// import { GoReport } from "react-icons/go";
// import { FaNetworkWired } from "react-icons/fa6";
import SideBar from "@/components/SideBar/SideBar";
// import { useState } from "react";
// import Ecommerce from "@/components/Ecommerce";
import NavBar from "@/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <>
      <div class="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <NavBar />
      </div>

      <SideBar />

      <div class="p-4 sm:ml-64 border-gray-800 bg-gray-100">
        <div class="p-4 mt-20 border-gray-800 bg-white rounded-lg border-2 ">
          {children}
        </div>
      </div>
    </>
  );
}
