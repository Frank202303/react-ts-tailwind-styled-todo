import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../models/Todo";
import {
  IconsWrapper,
  SingleIconWrapper,
  SingleTodoEditInput,
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
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
  const handleEditSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setEdit(false);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, todo: editTodo };
        } else {
          return todo;
        }
      })
    );
  };
  const inputRef = useRef<HTMLInputElement>(null);
  // when [edit] changed, triger: inputRef.current?.focus();
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <SingleTodoForm onSubmit={(e) => handleEditSubmit(e, todo.id)}>
      {edit ? (
        <SingleTodoEditInput
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        ></SingleTodoEditInput>
      ) : (
        <SingleTodoSpan className={todo.isDone ? "isDone" : "notDone"}>
          {todo.todo}
        </SingleTodoSpan>
      )}

      <IconsWrapper>
        <SingleIconWrapper
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
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
