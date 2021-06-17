import Image from "next/image";
import { ButtonGroup, Button, Alert } from "react-bootstrap";
import { FaCloud, FaGithub } from "react-icons/fa";
import type { ProjectI } from "../interface";
import siteStyle from "../utils/siteStyle";

const Project = ({
  image: { width, height, alt, src },
  title,
  summary,
  link: { github, live },
}: ProjectI) => (
  <div className="text-center my-5" style={siteStyle.projectContainer}>
    <Alert variant="warning">
      <h3>{title}</h3>
    </Alert>
    <Alert variant="light">{summary}</Alert>
    <div className=" my-3">
      <Image sizes="100" height={height} width={width} src={src} alt={alt} />
    </div>
    <ButtonGroup>
      <Button as="a" href={live} variant="light" size="lg">
        <FaCloud /> Live
      </Button>
      <Button as="a" href={github} variant="dark" size="lg">
        <FaGithub /> Github
      </Button>
    </ButtonGroup>
  </div>
);

export default Project;
