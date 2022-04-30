import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "pages/index"

describe("Home page", () => {
  beforeEach(() => render(<HomePage />).debug())
  afterEach(cleanup)
  
  it("render my name in header", () => {
  })
})