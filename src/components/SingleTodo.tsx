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
  return (
    <SingleTodoForm>
      <SingleTodoSpan>qqq</SingleTodoSpan>
      <IconsWrapper>
        <SingleIconWrapper>
          <AiFillEdit />
        </SingleIconWrapper>
        <SingleIconWrapper>
          <MdDelete />
        </SingleIconWrapper>
        <SingleIconWrapper>
          <MdDownloadDone />
        </SingleIconWrapper>
      </IconsWrapper>
    </SingleTodoForm>
  );
};

export default SingleTodo;
