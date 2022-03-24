import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../components/TodoItem";
import { Todo } from "../modal/Todo";
const mockedHandleDelete = jest.fn();
const mockedHandleToggle = jest.fn();
const mockTodo: Todo = {
  id: "10",
  title: "new todo",
  isCompleted: false,
};

describe("TodoItem component", () => {
  it("renders mock todo", () => {
    render(
      <TodoItem
        handleDelete={mockedHandleDelete}
        handleToggle={mockedHandleToggle}
        todo={mockTodo}
      />
    );
    const linkElement = screen.getByText(/new todo/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("toggles todo status", () => {
    render(
      <TodoItem
        handleDelete={mockedHandleDelete}
        handleToggle={mockedHandleToggle}
        todo={mockTodo}
      />
    );
    const checkbox = screen.getByTestId("toggle-todo");
    fireEvent.click(checkbox);
    expect(mockedHandleToggle).toHaveBeenCalledTimes(1);
  });
  it("delete todo", () => {
    render(
      <TodoItem
        handleDelete={mockedHandleDelete}
        handleToggle={mockedHandleToggle}
        todo={mockTodo}
      />
    );
    const btn = screen.getByTestId("delete-todo");
    fireEvent.click(btn);
    expect(mockedHandleDelete).toHaveBeenCalledTimes(1);
  });
});
