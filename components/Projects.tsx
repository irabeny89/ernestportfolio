import siteLocalData from "../data/siteLocalData";
import Project from "./Project";

const Projects = () => {
  const { projects } = siteLocalData;

  return (
    <>
      <h2 className="mt-5 mb-0 pt-5 bg-warning container-fluid">Projects:</h2>
      <div
        className="bg-warning container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 50,
        }}
      >
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
