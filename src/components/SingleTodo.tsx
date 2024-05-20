import React from "react";
import { Todo } from "../models/Todo";
import {
  IconsWrapper,
  SingleIconWrapper,
  SingleTodoForm,
  SingleTodoSpan,
} from "../style";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
interface Props {
  todo: Todo;
  todos: Todo[];
  id: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, id, setTodos }: Props) => {
  const handleDone = (id: number) => {
    // do not forget to call setTodos
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          //   console.log(todo.id);
          //   console.log(id);
          //   console.log(todo);
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      })
    );
  };
  const handleDelete = (id: number) => {
    // do not forget to call setTodos
    // Filter
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <SingleTodoForm>
      <SingleTodoSpan className={todo.isDone ? "isDone" : "notDone"}>
        {todo.todo}
      </SingleTodoSpan>
      <IconsWrapper>
        <SingleIconWrapper>
          <AiFillEdit />
        </SingleIconWrapper>
        <SingleIconWrapper onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </SingleIconWrapper>
        <SingleIconWrapper onClick={() => handleDone(todo.id)}>
          <MdDownloadDone />
        </SingleIconWrapper>
      </IconsWrapper>
    </SingleTodoForm>
  );
};

export default SingleTodo;
