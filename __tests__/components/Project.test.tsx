import { render, screen } from "@testing-library/react";
import Project from "components/Projects";
import siteLocalData from "siteLocalData";

const { projects } = siteLocalData;

describe("Project component", () => {
  beforeEach(() => render(<Project />));

  it("list my projects with details and links.", () => {
    const projectList = screen.getAllByTestId("project");

    projects.forEach(({ title, summary, link: { live, github } }, i) => {
      expect(projectList[i].children[0].textContent).toBe(title);
      expect(projectList[i].children[1].textContent).toBe(summary);
      expect(projectList[i].children[3].children[0]).toHaveAttribute(
        "href",
        live
      );
      expect(projectList[i].children[3].children[1]).toHaveAttribute(
        "href",
        github
      );
    });
  });

  it("matches snapshot", () => {
    expect(screen.getAllByTestId("project")).toMatchSnapshot();
  });
});
