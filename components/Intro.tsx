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
    <div data-testid="intro">
      <p className="display-4 text-center mb-5">{intro}</p>
      <div
        className="d-flex justify-content-around flex-wrap"
        data-testid="tools"
      >
        {tools.map((tool, i) =>
          tool === "JavaScript" ? (
            <div key={i}>
              <SiJavascript color="#cc0" /> {tool}
            </div>
          ) : tool === "TypeScript" ? (
            <div key={i}>
              <SiTypescript color="blue" /> {tool}
            </div>
          ) : tool === "Nodejs" ? (
            <div key={i}>
              <SiNodedotjs color="green" /> {tool}
            </div>
          ) : tool === "Nextjs" ? (
            <div key={i}>
              <SiNextdotjs color="black" /> {tool}
            </div>
          ) : tool === "Reactjs" ? (
            <div key={i}>
              <GrReactjs color="cyan" /> {tool}
            </div>
          ) : tool === "MongoDB" ? (
            <div key={i}>
              <DiMongodb color="green" /> {tool}
            </div>
          ) : tool === "MySQL" ? (
            <div key={i}>
              <DiMysql color="blue" /> {tool}
            </div>
          ) : tool === "GraphQL" ? (
            <div key={i}>
              <GrGraphQl color="crimson" /> {tool}
            </div>
          ) : tool === "PostgreSQL" ? (
            <div key={i}>
              <SiPostgresql color="#00d" /> {tool}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Intro;
