import { CSSProperties } from 'react'
import siteLocalData from "../data/siteLocalData";
import Project from "./Project";
import siteStyle from "../utils/siteStyle";

const Projects = () => {
  const { projects } = siteLocalData;
  const { projectsContainer } = siteStyle
  return (
    <>
      <h2 className="mt-5 mb-0 pt-5 bg-warning container-fluid">Projects:</h2>
      <div
        className="bg-warning container-fluid"
        style={projectsContainer as CSSProperties}
      >
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
