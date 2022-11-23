import { render, screen } from "@testing-library/react";
import siteLocalData from "siteLocalData";
import Footer from "components/Footer";

const { contacts, copyWriteYear } = siteLocalData;

describe("Footer component", () => {
  beforeEach(() => render(<Footer />));

  it("renders copy-write year.", () => {
    const copyWrite = screen.getByRole("heading", {
      name: `© ${copyWriteYear}`,
    });

    expect(copyWrite).toBeInTheDocument();
  });

  it("renders my contacts with links.", async () => {
    const links = screen.getAllByRole("link");

    links.forEach((link, i) =>
      expect(link.getAttribute("href")!.endsWith(contacts[i].line)).toBeTruthy()
    );
  });

  it("matches snapshot.", () => {
    expect(screen.getByTestId("footer")).toMatchSnapshot();
  });
});
