import Image from "next/image";
import { ButtonGroup, Button, Alert } from "react-bootstrap";
import { FaCloud, FaGithub } from "react-icons/fa";
import type { ProjectI } from "../interface";
import { siteStyle } from "pages";
import siteLocalData from "siteLocalData";

const { tools: generalTools } = siteLocalData;

const Tool = ({ toolName }: Record<"toolName", string>) => {
  const toolData = generalTools.find(
    ({ name }) => toolName.toLowerCase() === name.toLowerCase()
  );
  return (
    <div className="d-flex align-items-center">
      {toolData && <toolData.Icon color={toolData.color} />}
      <div>{toolName}</div>
    </div>
  );
};

export default function Project({
  image: { width, height, alt, src },
  link: { github, live },
  title,
  tools,
  summary,
}: ProjectI) {
  return (
    <div
      className="my-5"
      style={siteStyle.projectContainer}
      data-testid="project"
    >
      <Alert variant="warning">
        <h3 className="text-center">{title}</h3>
      </Alert>
      <Alert variant="light" className="h-25 overflow-auto">
        {summary}
      </Alert>
      <div className="my-3">
        <Image sizes="100" height={height} width={width} src={src} alt={alt} />
      </div>
      <Alert variant="light" className="overflow-auto d-flex gap-2">
        {tools.map((tool) => (
          <Tool key={tool} toolName={tool} />
        ))}
      </Alert>
      <ButtonGroup className="d-flex">
        <Button as="a" href={live} variant="light" size="lg">
          <FaCloud /> Live
        </Button>
        <Button as="a" href={github} variant="dark" size="lg">
          <FaGithub /> Github
        </Button>
      </ButtonGroup>
    </div>
  );
}
