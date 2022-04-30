import { render, screen } from "@testing-library/react";
import Intro from "components/Intro";
import siteLocalData from "data/siteLocalData";

const { intro, tools } = siteLocalData;

describe("Intro component", () => {
  beforeEach(() => render(<Intro />));

  it("renders intro message", () => {
    expect(screen.getByText(intro));
  });

  it("renders tools", () => {
    const toolsContainer = screen.getByTestId("tools");

    tools.forEach((tool, index) =>
      expect(toolsContainer.children.item(index)?.textContent).toBe(" " + tool)
    );
  });

  it("matches snapshot.", () => {
    expect(screen.getByTestId("intro")).toMatchSnapshot();
  });
});
