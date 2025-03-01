"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import GetCertificateButton from "@/components/GetCertificateButton";
import IntoBanner from "@/components/IntroBanner";
import ProgressBar from "@/components/ProgressBar";
import NavBar from "@/components/NavBar";
import Title from "@/components/Title";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState(null);
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   if (localStorage.getItem("name")) {
  //     setUsername(() => localStorage.getItem("name"));
  //     setIsLogged(() => true);
  //   } else {
  //     setUsername(() => null);
  //     setIsLogged(() => false);
  //   }

  //   getProgress();
  // }, []);

  // const getProgress = async () => {
  //   const user_id = localStorage.getItem("user_id");
  //   const totalModules = 6;

  //   const response = await fetch("/api/progress", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ user_id, totalModules }),
  //   });

  //   const data = await response.json();
  //   setProgress(() => data.progress);
  // };

  return (
    <div className="bg-white ">
    <NavBar />
    <Title />
      {/* <hr /> */}
      <div className="max-w-screen-xl mx-auto">
        {/* <ProgressBar progress={progress} /> 
          <div className="flex justify-center items-center p-4">
            <GetCertificateButton />
          </div> */}
        
       
          <div className="flex justify-center items-center mt-6">
            <Card
              img={"/legislature.png"}
              title={"Legislature"}
              description={"The Legislative Branch creates laws and controls government spending, shaping public policy and financial priorities."}
              link={isLogged ? "/training/phishing" : "/login"}
            />
          </div>

      </div>

    
    </div>
  );
}
