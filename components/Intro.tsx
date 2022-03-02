import siteLocalData from "../data/siteLocalData";
import { DiMongodb, DiMysql } from "react-icons/di";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiNodedotjs,
} from "react-icons/si";
import { GrReactjs, GrGraphQl } from "react-icons/gr";

const Intro = () => {
  const { tools, intro } = siteLocalData;
  return (
    <div>
      <p className="display-4 text-center mb-5">{intro}</p>
      <div className="d-flex justify-content-around flex-wrap">
        {tools.map((tool, i) => {
          if (tool === "JavaScript")
            return (
              <div key={i}>
                <SiJavascript color="#cc0" /> {tool}
              </div>
            );
          if (tool === "TypeScript")
            return (
              <div key={i}>
                <SiTypescript color="blue" /> {tool}
              </div>
            );
          if (tool === "Nodejs")
            return (
              <div key={i}>
                <SiNodedotjs color="green" /> {tool}
              </div>
            );
          if (tool === "Nextjs")
            return (
              <div key={i}>
                <SiNextdotjs color="black" /> {tool}
              </div>
            );
          if (tool === "Reactjs")
            return (
              <div key={i}>
                <GrReactjs color="cyan" /> {tool}
              </div>
            );
          if (tool === "MongoDB")
            return (
              <div key={i}>
                <DiMongodb color="green" /> {tool}
              </div>
            );
          if (tool === "MySQL")
            return (
              <div key={i}>
                <DiMysql color="blue" /> {tool}
              </div>
            );
          if (tool === "GraphQL")
            return (
              <div key={i}>
                <GrGraphQl color="crimson" /> {tool}
              </div>
            );
          if (tool === "PostgreSQL")
            return (
              <div key={i}>
                <SiPostgresql color="#00d" /> {tool}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Intro;
