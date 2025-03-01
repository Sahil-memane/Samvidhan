import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Card({
  img,
  title,
  description,
  link ,
  progress,
  setProgress,
}) {
  return (



<div class="max-w-sm  border border-black rounded-lg shadow mb-10">
    <a href="#">
      {/* <Image src={img} alt="" quality={100} height={150} width={200} className="rounded-t-lg object-cover w-full h-48"/> */}
        <img class="rounded-t-lg" src={img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {title}
            </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <Link href={`/learn/${title.toLowerCase()}`} class="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Expertise It
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>

   
  );
}
