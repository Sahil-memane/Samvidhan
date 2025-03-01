// import React from "react";
// import Ecommerce from "../Ecommerce";
import Legislature from "./Legislature";
import PassSecurity from "./PassSecurity";
import DataProtection from "./DataProtection";
import SocialEngg from "./SocialEngg";
import IncidenceRes from "./IncidenceRes";
import Remote from "./Remote";
export default function SideBar() {
  return (
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0  "
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white-800">
        <div class="ms-3 mb-5 text-2xl font-bold text-black ">
         Legislature Module
        </div>
        <ul class="space-y-2 font-medium">
          <Legislature />
        
        </ul>
      </div>
    </aside>
  );
}
