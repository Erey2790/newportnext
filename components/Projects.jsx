import Image from "next/image";
import React from "react";
import nextjs from "../public/assets/nextjschatgpt.PNG";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import eventsapp from "../public/assets/eventsapp.PNG";
import weatherapp from "../public/assets/newweatherdash.PNG";
import taskMaster from "../public/assets/newtaskmasterpro.PNG";

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="ChatGPTClone"
            projectType="NextJS"
            backgroundImg={nextjs}
            projectUrl="/chatgpt"
          />
          <ProjectItem
            title="Events App"
            projectType="NextJS"
            backgroundImg={eventsapp}
            projectUrl="/eventsapp"
          />
          <ProjectItem
            title="Weather Dashboard"
            projectType="Javascript"
            backgroundImg={weatherapp}
            projectUrl="/weatherdashboard"
          />
          <ProjectItem
            title="TaskMaster Pro"
            projectType="Javascript"
            backgroundImg={taskMaster}
            projectUrl="/taskmasterpro"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
