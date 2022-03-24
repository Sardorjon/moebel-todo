import create from "zustand";
import { Todo } from "../modal/Todo";

interface TodoState {
  todos: Todo[];
  filterStatus: string;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateFilterStatus: (status: string) => void;
}

const defaultState = {
  todos: [
    {
      id: "10",
      title: "new todo",
      isCompleted: false,
    },
  ],
  filterStatus: "all",
};

export const useStore = create<TodoState>((set) => ({
  ...defaultState,
  addTodo: (todo: Todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },
  deleteTodo: (todoId: string) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    }));
  },
  toggleTodo: (todoId: string) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId
          ? ({ ...todo, isCompleted: !todo.isCompleted } as Todo)
          : todo
      ),
    }));
  },
  updateFilterStatus: (status: string) => {
    set(() => ({
      filterStatus: status,
    }));
  },
}));
