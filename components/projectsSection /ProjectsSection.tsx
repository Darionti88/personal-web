import ProjectBox from "./ProjectBox";
import { NotionResponse } from "../../interface/notionResponse";

export const ProjectsSection = ({ results }: NotionResponse) => {
  return (
    <section className='flex flex-col w-screen justify-center items-center'>
      <div
        id='projects'
        className='h-full sm:px-20 py-10 mb-10 w-4/5 sm:w-full container'>
        <h1 className='sm:text-7xl text-5xl self-start mb-6 font-nunito py-5 underline decoration-8 decoration-indigo-600'>
          Some of my projects...
        </h1>
        <div className='grid w-full grid-cols-1 md:grid-cols-2 gap-y-12'>
          {results.map((project, index) => (
            <ProjectBox
              key={project.properties.name.title[0].plain_text}
              name={project.properties.name.title[0].plain_text}
              image={project.properties.image.files[0].file.url}
              description={
                project.properties.description.rich_text[0].plain_text
              }
              github={project.properties.github.url}
              url={project.properties.url.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
