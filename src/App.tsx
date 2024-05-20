import React, { useEffect, useState } from "react";

import "./App.css";
import { StyledButton } from "./components/StyledButton";
import { AppContainer, GlobalStyle, TitleSpan } from "./style";
import InputField from "./components/InputField";

function App() {
  useEffect(() => {
    // global Style: google font
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Neucha&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  const [todo, setTodo] = useState<string>("");

  return (
    <AppContainer>
      <GlobalStyle />
      <TitleSpan>Taskify</TitleSpan>
      <InputField todo={todo} setTodo={setTodo}></InputField>
      <StyledButton>My self defined button</StyledButton>
    </AppContainer>
  );
}

export default App;
