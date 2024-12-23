/* eslint-disable react/prop-types */
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div
      className="w-screen flex justify-center flex-col items-center p-12"
      id="projects"
    >
      <h1 className="text-2xl p-6 font-extrabold bg-white text-purple rounded-xl md:text-4xl md:p-6 text-center ">
        Les Objectifs De La Troupe
      </h1>
      <div className="flex flex-wrap gap-10 justify-center pr-12 pl-12 ml-28 mr-28 mt-10">
        {projects.map((project, i) => (
          <Project key={i} data={project} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
