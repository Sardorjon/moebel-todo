import { fireEvent, render, screen } from "@testing-library/react";
import FilterButtons from "../components/FilterButton";
const mockedHandleFilter = jest.fn();
const mockedButttons: string[] = ["all", "completed", "uncompleted"];

describe("FilterButton component", () => {
  it("renders all buttons todo", () => {
    render(
      <FilterButtons
        buttons={mockedButttons}
        handleFilter={mockedHandleFilter}
      />
    );
    const firstButton = screen.getByText(/all/i);
    expect(firstButton).toBeInTheDocument();
  });
  it("filters the todos", () => {
    render(
      <FilterButtons
        buttons={mockedButttons}
        handleFilter={mockedHandleFilter}
      />
    );
    const firstButton = screen.getByText(/all/i);
    fireEvent.click(firstButton);
    expect(mockedHandleFilter).toHaveBeenCalledTimes(1);
  });
});
