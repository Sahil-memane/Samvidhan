import React from 'react';
import ModuleStatus from "@/components/ModuleStatus";
import PhishingNextButton from "@/components/PhishingQuiz/PhishingNextButton";

export default function Legislature() {
  return (
    <>
      <div className="pb-4 mb-8 border-b border-gray-800">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            How to Engage with the Legislature
          </h1>
          <ModuleStatus module={"phishing"} />
        </div>
        <p className="my-3 text-base text-gray-600">
          Engaging with the Legislature is a fundamental aspect of participating in a democratic society. By taking part in various ways, citizens can influence legislative decisions, ensure their voices are heard, and contribute to the democratic process.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Voting
        </h2>
        <ul className="list-disc pl-5 my-3 text-base text-black text-justify">
          <li>
            <b>Electing Representatives:</b>
            <ul className="list-disc pl-5">
              <li>Citizens vote in elections to choose their representatives for the Lok Sabha (House of the People) and State Legislative Assemblies.</li>
              <li>Through their votes, citizens have the power to influence which policies and laws are proposed and enacted.</li>
              <li>Active participation in elections helps ensure that the elected representatives reflect the interests and needs of their constituents.</li>
            </ul>
          </li>
          <li>
            <b>Engaging in Electoral Processes:</b>
            <ul className="list-disc pl-5">
              <li>Voters can engage in pre-election processes by attending town hall meetings, candidate forums, and debates to understand the positions of candidates.</li>
              <li>Participating in these activities helps voters make informed decisions and hold candidates accountable for their promises.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-2/3 mx-auto mb-8">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/RYs8BZLDMkU?si=SHCP_SnzRcGwc_Th"
          title="Legislature"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Petitions and Public Consultations
        </h2>
        <ul className="list-disc pl-5 my-3 text-base text-black text-justify">
          <li>
            <b>Submitting Petitions:</b>
            <ul className="list-disc pl-5">
              <li>Citizens can submit petitions to Parliament to address specific issues or propose changes to existing laws.</li>
              <li>Petitions often trigger discussions and debates in Parliament, influencing legislative action.</li>
              <li>Effective petitions are usually well-researched, clearly articulated, and supported by a significant number of signatures.</li>
            </ul>
          </li>
          <li>
            <b>Participating in Public Consultations:</b>
            <ul className="list-disc pl-5">
              <li>Public consultations are held to gather feedback on proposed laws and policies before they are enacted.</li>
              <li>Citizens can participate by attending public hearings, submitting written comments, or engaging in online forums.</li>
              <li>Feedback from public consultations helps legislators understand the impact of proposed laws on different communities and stakeholders.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          RTI (Right to Information)
        </h2>
        <ul className="list-disc pl-5 my-3 text-base text-black text-justify">
          <li>
            <b>Requesting Information:</b>
            <ul className="list-disc pl-5">
              <li>Under the RTI Act, citizens have the right to request information from government bodies, including the Legislature.</li>
              <li>Requests can cover various aspects, including legislative proceedings, decisions, and expenditures.</li>
              <li>Access to this information helps promote transparency, accountability, and informed citizenry.</li>
            </ul>
          </li>
          <li>
            <b>Ensuring Accountability:</b>
            <ul className="list-disc pl-5">
              <li>RTI requests can be used to uncover issues related to corruption, inefficiency, or misuse of power within the legislative process.</li>
              <li>By holding legislators accountable through informed scrutiny, citizens help ensure that legislative activities align with democratic principles and public interest.</li>
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
          
          <PhishingNextButton link={"/learn/legislature/quiz"} />
        </div>
      </div>
    </>
  );
}
