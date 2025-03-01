"use client";
import React from "react";
import NavBar from "@/components/NavBar";

export default function Page({ params }) {
  const { recipeId } = params;

  const FileIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className="w-10 h-10"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
      <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
    </svg>
  );

  const PeopleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className="w-10 h-10"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path
        fillRule="evenodd"
        d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
      />
      <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
    </svg>
  );

  return (
    <>
      <NavBar />
      <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                <span class="text-sm text-gray-600 uppercase dark:text-gray-400">
                  Who we are?
                </span>
                <h1 class="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  About Us
                </h1>
                </div>
                <p class="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  Welcome to <strong>Sansthae and Samvidhan</strong>, your essential platform 
                  for understanding the Constitution of India. We recognize the critical role 
                  the Constitution plays in our democracy, yet its complex language and concepts 
                  often create a barrier for many. Our mission is to bridge this gap by presenting 
                  the Legislature, Executive, and Judiciary in a simplified and gamified manner, 
                  making this vital knowledge accessible and interesting for everyone.
                </p>

                <div className="flex flex-wrap items-center">
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-blue-500 dark:text-blue-400">
                        <FileIcon />
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        395
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Articles
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-blue-500 dark:text-blue-400">
                        <PeopleIcon />
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        10 Million
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Users
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="const.png"
                alt="About Us"
                className="relative z-40 object-cover w-full h-full rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
            </div>
            <div className="w-full lg:w-6/12 px-4 text-black">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-xl font-semibold mb-2">
                    <strong>Developed by</strong>
                  </span>
                  <ul className="list-unstyled align-middle">
                    <li className="pb-2">
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold">
                        Onkar Nanaware
                      </a>
                    </li>
                    <li className="pb-2">
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold">
                      Sahil Memane
                      </a>
                    </li>
                    <li className="pb-2">
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold">
                      Supriya Mulik
                      </a>
                    </li>
                    <li className="pb-2">
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold">
                      Srushti Midgule
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-col items-center bg-neutral-300 p-2">
            <p className="text-blueGray-500 text-sm text-center sm:text-left">
              © 2024 <a href="#" className="text-blueGray-600 hover:text-blueGray-800">Samvidhan</a>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
