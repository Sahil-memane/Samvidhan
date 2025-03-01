"use client"
import { React, useState, useEffect } from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
import { CiWarning } from "react-icons/ci";

export default function ModuleStatus({
  module
}) {
  const [status, setStatus] = useState(false);
  const getModuleStatus = async () => {
    try {
      const userId = localStorage.getItem('user_id');

      const response = await fetch(`/api/status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          module: module
        })
      });

      const data = await response.json();
      setStatus(data.isCompleted);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getModuleStatus();
  }, []);



  return (
    <>
      {
        status ? (
          <div class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50  dark:text-green-400 dark:border-green-800" role="alert">
            <AiFillCheckCircle class="text-xl me-2" />
            <div>
              <span class="font-medium">Status: </span> Completed
            </div>
          </div>
        ) : (
          <div class="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50   dark:border-yellow-800" role="alert">
            <CiWarning class="text-xl me-2" />
            <div>
              <span class="font-medium">Status: </span> Incomplete
            </div>
          </div>
        )
      }
    </>

  )
}

