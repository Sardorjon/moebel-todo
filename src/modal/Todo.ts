import { ChangeEvent, FormEvent } from "react";

export type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type TodoProps = {
  todo: Todo;
  handleDelete: (id: string) => void;
  handleToggle: (id: string) => void;
};

export type TodoFormProps = {
  title: string;
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export type FilterButtonProps = {
  buttons: string[];
  handleFilter: (status: string) => void;
};
