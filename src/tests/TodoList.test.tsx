import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("FilterButton component", () => {
  it("renders all buttons todo", () => {
    render(<TodoList />);
    const firstButton = screen.getByText(/all/i);
    expect(firstButton).toBeInTheDocument();
  });

  // TODO - please continue with test for this component
});
