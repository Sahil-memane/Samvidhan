import React from 'react'
import ModuleStatus from "@/components/ModuleStatus";
import PhishingNextButton from "@/components/PhishingQuiz/PhishingNextButton";

export default function Legislature() {
  return (
    <>
      <div className="pb-4 mb-8 border-b border-gray-800">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Structure of the Indian Legislature
          </h1>
          <ModuleStatus module={"phishing"} />
        </div>
        <p className="my-3 text-base text-gray-600">
          The Indian Legislature, also known as Parliament, is a bicameral institution, meaning it has two houses. These two houses are the Lok Sabha (House of the People) and the Rajya Sabha (Council of States). Together, they form the legislative framework of India, responsible for creating laws, debating national issues, and checking the powers of the Executive.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Lok Sabha (House of the People)
        </h2>
        <p className="my-3 text-base text-black text-justify">
          The Lok Sabha is the lower house of Parliament and is directly elected by the citizens of India. It is the principal legislative body where most of the legislative business is conducted. The Lok Sabha has a maximum strength of 552 members, which includes 530 members from the states, 20 members from Union Territories, and 2 members nominated by the President from the Anglo-Indian community, if deemed necessary.
        </p>
        <p className="my-3 text-base text-black text-justify">
          Members of the Lok Sabha, known as Members of Parliament (MPs), are elected for a term of five years. The primary functions of the Lok Sabha include introducing and passing bills, particularly money bills, which must originate in this house. The Lok Sabha also plays a crucial role in controlling the government by voting on various issues, including the budget. A no-confidence motion in the Lok Sabha, if passed, can force the resignation of the entire Council of Ministers.
        </p>
      </div>
      <div className="w-full md:w-2/3 mx-auto mb-8">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/xETfeseo1Sw?si=833nDAik_-QjOOpI"
          title="Legislature"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Rajya Sabha (Council of States)
        </h2>
        <p className="my-3 text-base text-black text-justify">
          The Rajya Sabha is the upper house of Parliament and represents the states and Union Territories of India. Unlike the Lok Sabha, the Rajya Sabha is a permanent body and is not subject to dissolution. However, one-third of its members retire every two years, ensuring continuity within the house. The Rajya Sabha has a maximum strength of 250 members, out of which 238 members are elected by the elected members of the State Legislative Assemblies and Union territories, and 12 members are nominated by the President for their contributions to art, literature, science, and social services.
        </p>
        <p className="my-3 text-base text-black text-justify">
          The Rajya Sabha acts as a revising chamber, where it reviews, amends, and suggests modifications to the bills passed by the Lok Sabha. It has the power to delay the passage of certain types of legislation, but it cannot permanently block them. On matters related to states, such as altering state boundaries or reorganizing states, the Rajya Sabha plays a significant role. Additionally, it provides a forum for representation of the states in the federal structure of India.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          The Role of the President in the Legislature
        </h2>
        <p className="my-3 text-base text-black text-justify">
          The President of India is an integral part of the Indian Legislature, even though they are not a member of either house. All bills passed by both houses of Parliament must receive the President’s assent to become law. The President also has the power to summon and prorogue Parliament and dissolve the Lok Sabha. In certain situations, the President can promulgate ordinances when Parliament is not in session, which have the same effect as laws passed by Parliament.
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
          <PhishingNextButton link="/learn/legislature/role"/>
        </div>
      </div>
    </>
  )
}
