import { ChangeEvent, FormEvent, useState } from "react";
import { useStore } from "../store/TodoState";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import { Todo } from "../modal/Todo";
import TodoForm from "./TodoForm";
import FilterButtons from "./FilterButton";

const TodoList = () => {
  const {
    todos,
    filterStatus,
    addTodo,
    updateFilterStatus,
    deleteTodo,
    toggleTodo,
  } = useStore();

  const [title, setTitle] = useState("");
  const buttons = ["All", "Completed", "Uncompleted"];
  const completed = filterStatus === "completed";
  const uncompleted = filterStatus === "uncompleted";

  const filterItem = (name: string) => {
    updateFilterStatus(name.toLowerCase());
  };

  const filteredTodos = todos.filter((todo) => {
    if (completed) return todo.isCompleted;
    if (uncompleted) return !todo.isCompleted;
    return todo;
  });

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title,
      isCompleted: false,
    };
    addTodo(newTodo);
    setTitle("");
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id);
  };

  const handleToggleTodo = (id: string) => {
    toggleTodo(id);
  };

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTitle(value);
  };

  return (
    <section className="w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <div className="m-4 text-2xl">
        <h1>Let's create some todos!</h1>
      </div>
      <TodoForm
        title={title}
        handleChange={handleChange}
        handleSubmit={handleSubmitTodo}
      />
      <div className="w-full p-4 mb-2 mr-8 flex justify-between items-center">
        <FilterButtons handleFilter={filterItem} buttons={buttons} />
      </div>
      {filteredTodos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDeleteTodo}
          handleToggle={handleToggleTodo}
        />
      ))}
      {!uncompleted && !completed && (
        <p>You have {filteredTodos.length} todo(s) for today!</p>
      )}
      {completed && (
        <p>
          Congrats, you have {filteredTodos.length} todo(s) completed so far!
        </p>
      )}
      {uncompleted && <p>You have left {filteredTodos.length} todo(s)!</p>}
    </section>
  );
};

export default TodoList;
