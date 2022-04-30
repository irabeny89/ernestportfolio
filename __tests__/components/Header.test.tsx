import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "components/Header";
import siteLocalData from "data/siteLocalData";

const {
  author,
  contacts,
  cv: { url },
} = siteLocalData;

describe("Header component", () => {
  beforeEach(() => render(<Header />));

  it("renders my full name.", () => {
    const header = screen.getByRole("heading");

    expect(header).toHaveTextContent(author);
  });

  it("renders my contacts with links.", async () => {
    const user = userEvent.setup(),
      contactsDropdown = screen.getByRole("button", {
        name: /contacts/i,
      });

    await user.click(contactsDropdown);

    contacts.forEach(async ({ type, line }) =>
      type.includes("Phone")
        ? expect(await screen.findByText(type)).toHaveAttribute(
            "href",
            `tel:${line}`
          )
        : type.includes("Email")
        ? expect(await screen.findByText(type)).toHaveAttribute(
            "href",
            `mailto:${line}`
          )
        : expect(await screen.findByText(type)).toHaveAttribute("href", line)
    );
  });

  it("has a link to my CV.", () => {
    const cvLink = screen.getByRole("link");

    expect(cvLink).toHaveAttribute("href", url);
  });

  it("it matches snapshot.", () => {
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });
});
