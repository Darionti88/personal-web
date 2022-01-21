import ProjectBox from "./ProjectBox";
import MyProjects from "../../assets/projects.json";
import { NotionResponse } from "../../interface/notionResponse";

export const ProjectsSection = ({ results }: NotionResponse) => {
  return (
    <section
      id='projects'
      className='h-full px-12 w-full sm:px-20 mb-12 flex flex-col lg:justify-center lg:items-center '>
      <h1 className='text-7xl self-start mb-6 font-nunito py-5 underline decoration-8 decoration-indigo-600'>
        Some of my projects...
      </h1>
      <div className='grid w-full grid-cols-1 md:grid-cols-2 gap-y-12'>
        {results.map((project) => (
          <ProjectBox
            key={project.properties.name.title[0].plain_text}
            name={project.properties.name.title[0].plain_text}
            image={project.properties.image.files[0].file.url}
            description={project.properties.description.rich_text[0].plain_text}
            github={project.properties.github.url}
            url={project.properties.url.url}
          />
        ))}
      </div>
    </section>
  );
};
