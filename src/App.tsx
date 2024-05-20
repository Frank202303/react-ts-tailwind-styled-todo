import React, { useEffect, useState } from "react";

import "./App.css";
import { StyledButton } from "./components/StyledButton";
import { AppContainer, GlobalStyle, TitleSpan } from "./style";
import InputField from "./components/InputField";
import { Todo } from "./models/Todo";
import TodoList from "./components/TodoList";

function App() {
  useEffect(() => {
    // global Style: google font
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Neucha&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
      //console.log(todos);
    }
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <TitleSpan>Taskify</TitleSpan>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      ></InputField>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
      {/* <StyledButton>My self defined button</StyledButton> */}
    </AppContainer>
  );
}

export default App;
