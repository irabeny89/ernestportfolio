import { render, screen } from "@testing-library/react";
import siteLocalData from "data/siteLocalData";
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

    links.forEach((link) =>
      expect(
        contacts.some(({ line }) => link.getAttribute("href")!.endsWith(line))
      ).toBeTruthy()
    );
  });

  it("matches snapshot.", () => {
    expect(screen.getByTestId("footer")).toMatchSnapshot();
  });
});
