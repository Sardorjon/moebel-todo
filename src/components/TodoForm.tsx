import { TodoFormProps } from "../modal/Todo";

const TodoForm = ({ title, handleChange, handleSubmit }: TodoFormProps) => {
  return (
    <form className="w-full flex justify-between" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        autoFocus
        data-testid="title"
        name="title"
        value={title}
        className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
        onChange={handleChange}
      />
      <button
        type="submit"
        data-testid="add-todo"
        aria-label="Add todo"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
