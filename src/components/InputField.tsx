import React from "react";
import { Button, Input, InputWrapper } from "../style";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <InputWrapper>
      <Input
        type="input"
        placeholder="Enter a Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button type="submit">Go</Button>
    </InputWrapper>
  );
};

export default InputField;
