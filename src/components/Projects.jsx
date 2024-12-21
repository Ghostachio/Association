/* eslint-disable react/prop-types */
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div
      className="w-screen flex justify-center flex-col items-center p-12"
      id="projects"
    >
      <h1 className="text-3xl p-6">Our Projects</h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {projects.map((project) => (
          <Project key={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
