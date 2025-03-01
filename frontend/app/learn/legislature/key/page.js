import React from 'react';
import ModuleStatus from "@/components/ModuleStatus";
import PhishingNextButton from "@/components/PhishingQuiz/PhishingNextButton";

export default function Legislature() {
  return (
    <>
      <div className="pb-4 mb-8 border-b border-gray-800">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Key Components of the Indian Legislature
          </h1>
          <ModuleStatus module={"phishing"} />
        </div>
        <p className="my-3 text-base text-gray-600">
          Understanding the key components of the Legislature is crucial for appreciating its role in governance. These components form the backbone of how the legislative process operates and ensures that the democratic system functions smoothly.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Sessions of Parliament
        </h2>
        <ul className="list-disc pl-5 my-3 text-base text-black text-justify">
          <li>
            <b>Budget Session:</b>
            <ul className="list-disc pl-5">
              <li>Held from February to May, this is the most crucial session where the government presents its annual budget, and financial proposals are discussed and approved.</li>
              <li>The session often begins with the President's address, which outlines the government's policies and agenda for the coming year.</li>
              <li>During this session, demands for grants are also discussed, and the Finance Bill is passed, which includes taxation proposals.</li>
            </ul>
          </li>
          <li>
            <b>Monsoon Session:</b>
            <ul className="list-disc pl-5">
              <li>Usually held from July to September, this session addresses legislative business that could not be completed during the Budget Session and discusses pressing issues.</li>
              <li>It is often seen as a mid-year review where the government and opposition debate the progress of the year’s work.</li>
              <li>Key bills, especially those related to finance and development, are frequently discussed and passed during this session.</li>
            </ul>
          </li>
          <li>
            <b>Winter Session:</b>
            <ul className="list-disc pl-5">
              <li>Held from November to December, this is the shortest session, often focused on passing important legislation that requires immediate attention.</li>
              <li>This session typically includes discussions on the performance of the government and the introduction of new policies for the upcoming year.</li>
              <li>It is also a time for considering various government reports and other legislative matters.</li>
            </ul>
          </li>
          <li>
            <b>Special Sessions:</b>
            <ul className="list-disc pl-5">
              <li>Occasionally, special sessions are convened for specific urgent matters or to pass critical legislation.</li>
              <li>These sessions are not part of the regular parliamentary calendar and are called as per the requirement of the situation.</li>
              <li>Special sessions are often convened for issues of national importance or in response to significant events that require immediate legislative attention.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-2/3 mx-auto mb-8">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/pb8b87e1re4?si=R4lyTfOlzmFpBZC9"
          title="Legislature"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Parliamentary Committees
        </h2>
        <ul className="list-disc pl-5 my-3 text-base text-black text-justify">
          <li>
            <b>Standing Committees:</b>
            <ul className="list-disc pl-5">
              <li>Permanent committees that work on specific areas like finance, defense, health, and education.</li>
              <li>They review bills, budgets, and policies, providing detailed scrutiny.</li>
              <li>Standing Committees play a crucial role in shaping legislation and ensuring that proposed laws are thoroughly examined before they are presented to Parliament for debate.</li>
            </ul>
          </li>
          <li>
            <b>Select Committees:</b>
            <ul className="list-disc pl-5">
              <li>Temporary committees formed to examine a particular bill in detail.</li>
              <li>They submit their findings and recommendations to Parliament.</li>
              <li>These committees are often tasked with resolving specific issues within a bill that may not have been fully addressed during general parliamentary debates.</li>
            </ul>
          </li>
          <li>
            <b>Joint Committees:</b>
            <ul className="list-disc pl-5">
              <li>Committees composed of members from both the Lok Sabha and the Rajya Sabha.</li>
              <li>They work together to examine specific matters of common interest.</li>
              <li>Joint Committees are often formed to investigate major issues, such as corruption scandals or major policy failures, where input from both houses is considered necessary.</li>
            </ul>
          </li>
          <li>
            <b>Public Accounts Committee (PAC):</b>
            <ul className="list-disc pl-5">
              <li>This committee audits the revenue and expenditure of the government, ensuring that public funds are used efficiently.</li>
              <li>The PAC examines reports from the Comptroller and Auditor General (CAG) of India and ensures that financial administration is conducted in accordance with the Constitution and the law.</li>
              <li>The committee plays a vital role in ensuring transparency and accountability in government spending.</li>
            </ul>
          </li>
          <li>
            <b>Committee on Public Undertakings:</b>
            <ul className="list-disc pl-5">
              <li>This committee reviews the reports and functioning of public sector enterprises, ensuring accountability and transparency.</li>
              <li>It examines the performance of state-owned companies, evaluates their management practices, and suggests improvements.</li>
              <li>The committee ensures that these enterprises operate efficiently and contribute effectively to the economy.</li>
            </ul>
          </li>
        </ul>
      </div>

      

      <div className="mb-8">
        <div className="my-3 text-base text-black">
          For more information, visit{" "}
          <a
            href="https://sansad.in/poi"
            target="_blank"
            className="text-blue-700 dark:text-blue-500"
          >
            Official Parliament of India website.
          </a>
        </div>
        <div className="text-center flex justify-center items-center">
          <PhishingNextButton link="/learn/legislature/quiz"/>
        </div>
      </div>
    </>
  );
}
