"use client";
import React, { useEffect, useState } from "react";
import TranslateComponent from "@/components/TranslateComponent";
import Link from "next/link";

export default function NavBar() {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        // Check localStorage for username when component mounts
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear(); // Clear all localStorage items
        setUsername(null); // Reset username state
        window.location.href = '/'; // Redirect to home page
    };

    return (
        <nav className="bg-black text-gray-100 static bg-opacity-90 w-full top-0 start-0">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="./../../logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        Samvidhan
                    </span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {username ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-100">Welcome, {username}</span>
                            <button
                                onClick={handleLogout}
                                className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link href="/login">
                            <button
                                type="button"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                            >
                                Login
                            </button>
                        </Link>
                    )}
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link
                                href="/"
                                className="block py-2 px-3 text-gray-100 rounded md:p-0"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/explore"
                                className="block py-2 px-3 text-gray-100 rounded md:p-0"
                            >
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/chatbot"
                                className="block py-2 px-3 text-gray-100 rounded md:bg-transparent md:p-0"
                                aria-current="page"
                            >
                                Chatbot
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/learn"
                                className="block py-2 px-3 text-gray-100 rounded md:p-0"
                            >
                                Learn
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/games"
                                className="block py-2 px-3 text-gray-100 rounded md:p-0"
                            >
                                Games
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/leaderboard"
                                className="block py-2 px-3 text-gray-100 rounded md:p-0"
                            >
                                Leaderboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="block py-2 px-3 text-gray-100 rounded md:p-0"
                            >
                                About us
                            </Link>
                        </li>
                        <li className="ml-8">
                            <TranslateComponent />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}