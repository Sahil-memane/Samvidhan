import React from "react";

export default function Grid() {
    return (
        <div className="grid grid-cols-5 grid-rows-4 gap-4 max-w-screen-xl mx-auto my-20">
            <div className="col-span-3 row-span-2 rounded-lg border border-black max-h-96">
                <img 
                    src="/images/home/b1.webp" 
                    alt="A beautiful hero image" 
                    className="object-cover h-full w-full rounded-lg" 
                />
            </div>
            <div className="bg-green-500 col-span-2 rounded-lg border border-black max-h-48 overflow-hidden">
                <img 
                    src="/images/home/bg2.jpg" 
                    alt="A vibrant green background" 
                    className="object-cover w-full h-full rounded-lg" 
                />
            </div>
            <div className="bg-blue-500 col-span-2 rounded-lg border border-black max-h-48">
                <img 
                    src="/images/home/bg3.jpg" 
                    alt="A calming blue background" 
                    className="object-cover h-full w-full rounded-lg" 
                />
            </div>
            <div className="col-span-2 rounded-lg border border-black">
                <img 
                    src="/images/home/bg4.png" 
                    alt="Background with some artistic content" 
                    className="object-contain h-full w-full rounded-lg" 
                />
            </div>
            <div className="bg-pink-500 col-span-3 row-span-2 rounded-lg border border-black">
                <img 
                    src="/images/home/b5.avif" 
                    alt="A creative pink background" 
                    className="object-cover h-full w-full rounded-lg" 
                />
            </div>
            <div className="bg-purple-500 col-span-2 rounded-lg border border-black max-h-48 overflow-hidden">
                <img 
                    src="/images/home/bg6.jpg" 
                    alt="A soothing purple background" 
                    className="object-cover w-full h-full rounded-lg" 
                />
            </div>
        </div>
    );
}
