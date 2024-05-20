import React from "react";
import { Button, Input, InputWrapper } from "../style";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <InputWrapper>
      <Input type="input" placeholder="Enter a Task" />
      <Button type="submit">Go</Button>
    </InputWrapper>
  );
};

export default InputField;
