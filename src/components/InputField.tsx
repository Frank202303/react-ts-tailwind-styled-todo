import React from "react";
import { Button, Input, InputWrapper } from "../style";

const InputField = ({
  todo,
  setTodo,
}: {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <InputWrapper>
      <Input type="input" placeholder="Enter a Task" />
      <Button type="submit">Go</Button>
    </InputWrapper>
  );
};

export default InputField;
