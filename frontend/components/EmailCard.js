import React from 'react'
import { PiDetectiveFill } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";

export default function EmailCard(
    {
        sender,
        subject,
        body,
        date,
        setSelects,
        selects,
        index
    }

) {
    return (
        <div class="bg-white select-none dark:bg-gray-800 shadow p-6 rounded-lg hover:cursor-pointer  transition-transform duration-300 ease-in-out "
            onClick={() => {
                if (selects.includes(index)) {
                    setSelects(selects.filter((item) => item !== index));
                } else {
                    setSelects([...selects, index]);
                }
            }}
        >


            {/* Selected Indicator */}
            {/* {selected ? (
                <div class="static bottom-0 right-0 p-2 bg-red-500 text-white inline-block ">
                    <PiDetectiveFill />
                </div>
            ) : (
                <div class="static top-0 right-0 p-2 bg-green-500 text-white inline-block ">
                    <MdSecurity />
                </div>
            )} */}

            {
                selects.includes(index) ? (
                    <div class=" p-2 bg-red-500 text-white inline-block mb-3">
                        <div className="flex items-center">
                            <PiDetectiveFill className='mr-3' /> Suspicious
                        </div>
                    </div>
                ) : (
                    <div class="p-2 bg-green-500 text-white inline-block mb-3">
                        <div className="flex items-center pr-3">
                            <MdSecurity className='mr-3' /> Genuine
                        </div>
                    </div>
                )
            }


            {/* Subject */}
            <h1
                class="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >{subject}</h1>

            <div class="flex justify-between items-center mt-3">
                <h2
                    class="text-lg  text-gray-900 dark:text-gray-100"
                >From: {sender}</h2>
            </div>


            {/* Body */}
            <p
                class="mt-4 text-gray-600 dark:text-gray-400"
                dangerouslySetInnerHTML={

                    { __html: body }}

            />

            {/* Date */}
            <div class="flex justify-between items-center mt-4">
                <p
                    class="text-sm text-gray-600 dark:text-gray-400"
                >{date}</p>
            </div>
        </div>
    )
}
