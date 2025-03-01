"use client";
import React from "react";
import { FaNetworkWired } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
export default function Remote() {
  const [remote, setRemote] = useState(true);

  return (
    <li>
      <button
        onClick={() => setRemote((prevVal) => !prevVal)}
        className="w-full"
      >
        <a
          href="#"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <FaNetworkWired
            class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            size={20}
          />
          <span class=" ms-3 whitespace-nowrap">Remote Work Security</span>
        </a>
      </button>
      <ul
        id="dropdown-example"
        className={`${remote ? "hidden" : ""} py-2 space-y-2`}
      >
        <li>
          <Link
            href="/training/remote-work"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            About Remote Work Security
          </Link>
        </li>
        <li>
          <Link
            href="/training/remote-work/quiz"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Quiz
          </Link>
        </li>
      </ul>
    </li>
  );
}
