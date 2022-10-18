import React from 'react';
import GlobalStyle from "./GlobalStyle";
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:3001/todos"
      );
      return response
    }
    fetchData()
      .then((res) => {
        setTodos(res.data);
      })
  }, []);


  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead todos={todos} setTodos={setTodos}/>
          <TodoList todos={todos} setTodos={setTodos}/>
          <TodoCreate todos={todos} setTodos={setTodos}/>
        </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;
