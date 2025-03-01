"use client";

import React from "react";
import { MdPeopleAlt } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

export default function SocialEngg() {
  const [socialEng, setSocialEng] = useState(true);
  return (
    <li>
      <button
        onClick={() => setSocialEng((prevVal) => !prevVal)}
        className="w-full"
      >
        <a
          href="#"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <MdPeopleAlt
            class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            size={20}
          />
          <span class="ms-3 whitespace-nowrap">Social Engineering</span>
        </a>
      </button>
      <ul
        id="dropdown-example"
        className={`${socialEng ? "hidden" : ""} py-2 space-y-2`}
      >
        <li>
          <Link
            href="/training/social-engg"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            About Social Engg
          </Link>
        </li>
        <li>
          <Link
            href="/training/social-engg/quiz"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Quiz
          </Link>
        </li>
      </ul>
    </li>
  );
}
