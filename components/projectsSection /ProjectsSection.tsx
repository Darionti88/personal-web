import React from "react";
import ProjectBox from "./ProjectBox";
import MyProjects from "../../assets/projects.json";

const ProjectsSection = () => {
  return (
    <section
      id='projects'
      className='h-full px-12 w-screen sm:px-20 mb-12 flex flex-col lg:justify-center lg:items-center '>
      <h1 className='text-7xl self-start mb-6 font-nunito py-5 underline decoration-8 decoration-indigo-600'>
        Some of my projects...
      </h1>
      <div className='grid justify-items-center w-full grid-cols-1 md:grid-cols-2 gap-y-12'>
        {MyProjects.map((project) => (
          <ProjectBox key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
