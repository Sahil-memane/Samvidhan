"use client"
// import Footer from "@/components/Footer";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProjectFeatures from "@/components/ProjectFeatures";
// import 3Dcard from "@/components/3Dcard";
// import AnimatedPinDemo from "@/components/3Dcomponent";
import RecentProjects from "@/components/RecentProjects";
import {Suspense} from "react";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Grid />
      {/* <ProjectFeatures /> */}

       <Suspense fallback={<div>Loading projects...</div>}>
      <RecentProjects />
    </Suspense>
    <Footer />
    </>
  );
}
