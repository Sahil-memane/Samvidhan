import React from "react";
import Link from "next/link";
export default function PhishingNextButton({link}) {
  return (
    <Link href={`${link}`} className="mt-5">
      <button className=" btn-ui bg-blue-700 p-2 border-black border text-white rounded-2xl pl-6 pr-6">Next</button>
    </Link>
  );
}
