import React from "react";
import { Button, Input, InputWrapper } from "../style";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <InputWrapper action="" onSubmit={handleAdd}>
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
