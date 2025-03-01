import React from 'react';
import ModuleStatus from "@/components/ModuleStatus";
import PhishingNextButton from "@/components/PhishingQuiz/PhishingNextButton";

export default function Legislature() {
  return (
    <>
      <div className="pb-4 mb-8 border-b border-gray-800">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Role and Functions of the Indian Legislature
          </h1>
          <ModuleStatus module={"phishing"} />
        </div>
        <p className="my-3 text-base text-gray-600">
          The Legislature is the cornerstone of a democratic system, playing a crucial role in shaping the laws and policies of a nation. In India, the Legislature operates within the framework of a parliamentary system, where it performs several vital functions, including law-making, representation, and overseeing the Executive branch. These functions ensure that the government remains accountable and operates in the best interest of the public.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Law-Making
        </h2>
        <p className="my-3 text-base text-black text-justify">
          The primary function of the Legislature is to make laws. This process begins with the introduction of a bill, which can be proposed by either house of Parliament, although certain types of bills, like money bills, can only be introduced in the Lok Sabha. The bill undergoes several readings and debates, allowing members to discuss its merits and suggest amendments. Once both houses pass the bill, it is sent to the President for their assent. Upon receiving the President’s signature, the bill becomes law and is enforceable throughout the country. This law-making process is fundamental to addressing the needs and challenges of society, and it ensures that the legal framework of the nation evolves with changing times.
        </p>
      </div>

      <div className="w-full md:w-2/3 mx-auto mb-8">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/-vHw9Bmu0NQ?si=j98VFffuKF9pvLhn"
          title="Legislature"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Representation
        </h2>
        <p className="my-3 text-base text-black text-justify">
          The Legislature also serves as the voice of the people. Members of Parliament (MPs) are elected to represent the diverse interests and concerns of their constituents. Through debates, discussions, and questions, MPs bring attention to the issues that matter most to the public. Whether it’s about local infrastructure, social justice, or national security, the Legislature provides a platform where these concerns can be addressed. This representative role is essential in a democracy, as it ensures that the government remains connected to the will of the people. By reflecting public opinion in the legislative process, MPs help shape policies that align with the values and aspirations of the society they represent.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Oversight of the Executive
        </h2>
        <p className="my-3 text-base text-black text-justify">
          Another critical function of the Legislature is to oversee the actions of the Executive branch. This oversight is achieved through various mechanisms, such as parliamentary committees, question hours, and debates. These tools allow the Legislature to monitor government activities, scrutinize its policies, and ensure that it is acting within the bounds of the law. For instance, during the question hour, MPs can ask ministers to explain and justify their actions, decisions, and policies. This keeps the Executive accountable and transparent in its functioning. Additionally, the Legislature has the power to approve or reject budgets and other financial proposals, which further checks the power of the Executive. By keeping a close watch on the government, the Legislature ensures that the administration serves the public effectively and does not misuse its authority.
        </p>
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
          <PhishingNextButton link="/learn/legislature/key"/>
        </div>
      </div>
    </>
  );
}
