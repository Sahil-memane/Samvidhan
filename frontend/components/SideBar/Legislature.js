"use client";
import React from "react";
import { MdPhishing } from "react-icons/md";
// import { MdOutlineQuiz } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
export default function Legislature() {
  const [showPhishingData, setShowPhishingData] = useState(false);

  return (
   
      <ul
        id="dropdown-example"
        className={`${showPhishingData ? "hidden" : ""} py-2 space-y-2`}
      >
        <li className="border-2 rounded-lg">
          <Link
            href="/learn/legislature"
            class="flex items-center w-full p-2 border-gray-950 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-800 hover:text-white"
          >
            Introduction to Legislature
          </Link>
        </li>
        <li className="border-2 rounded-lg">
          <Link
            href="/learn/legislature/struct"
            class="flex items-center w-full p-2 border-gray-950 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-800 hover:text-white"
          >
            Structure of the Indian Legislature
          </Link>
        </li>
        <li className="border-2 rounded-lg">
          <Link
            href="/learn/legislature/role"
            class="flex items-center w-full p-2 border-gray-950 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-800 hover:text-white"
          >
           Role and Functions of the Legislature
          </Link>
        </li>
        <li className="border-2 rounded-lg">
          <Link
            href="/learn/legislature/key"
            class="flex items-center w-full p-2 border-gray-950 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-800 hover:text-white"
          >
          Key Components of the Legislature
          </Link>
        </li>
        <li className="border-2 rounded-lg">
          <Link
            href="/learn/legislature/engage"
            class="flex items-center w-full p-2 border-gray-950 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-800 hover:text-white"
          >
          How to Engage with the Legislature
          </Link>
        </li>
        <li className="border-2 rounded-lg">
          <Link
            href="/learn/legislature/quiz"
            class="flex items-center w-full p-2 border-gray-950 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-800 hover:text-white"
          >
          Quiz
          </Link>
        </li>

      </ul>

  );
}
