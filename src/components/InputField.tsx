import React from "react";
import { Button, Input, InputWrapper } from "../style";

const InputField = () => {
  return (
    <InputWrapper>
      <Input type="input" placeholder="Enter a Task" />
      <Button type="submit">Go</Button>
    </InputWrapper>
  );
};

export default InputField;
