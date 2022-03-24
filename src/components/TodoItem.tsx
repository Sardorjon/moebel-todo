import { TodoProps } from "../modal/Todo";

const TodoItem = ({
  todo: { id, title, isCompleted },
  handleDelete,
  handleToggle,
}: TodoProps) => (
  <div
    className={`
        flex w-full p-4 mb-2 justify-between items-center
       ${isCompleted ? "bg-gray-400 " : "bg-blue-300"}
      `}
  >
    <p
      className={`
          ml-2 text-xl
          ${isCompleted ? "text-white line-through" : "text-gray-700"}
        `}
    >
      {title}
    </p>
    <div className="w-1/6 flex justify-between items-center mr-2">
      <button
        data-testid="delete-todo"
        aria-label="Delete a todo"
        className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold  rounded"
        onClick={() => handleDelete(id)}
      >
        X
      </button>
      <input
        type="checkbox"
        checked={isCompleted}
        data-testid="toggle-todo"
        onChange={() => handleToggle(id)}
        className="form-checkbox h-7 w-7"
      />
    </div>
  </div>
);

export default TodoItem;
