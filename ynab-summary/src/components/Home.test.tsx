import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
  it("should render input field for token", () => {
    render(<Home />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
