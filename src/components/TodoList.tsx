import React from "react";
import { Todo } from "../models/Todo";
import { TodoListWrapper } from "../style";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
