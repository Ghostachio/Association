/* eslint-disable react/prop-types */
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div
      className="w-screen flex justify-center flex-col items-center p-12"
      id="projects"
    >
      <h1 className="text-4xl p-6 font-extrabold ">أهداف الجمعية</h1>
      <div className="flex flex-wrap gap-5 justify-center pr-12 pl-12 ml-28 mr-28">
        {projects.map((project, i) => (
          <Project key={i} data={project} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
