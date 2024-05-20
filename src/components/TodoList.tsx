import React from "react";
import { Todo } from "../models/Todo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div>{todo.todo}</div>
      ))}
    </div>
  );
};

export default TodoList;
