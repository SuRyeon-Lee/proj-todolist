import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import axios from 'axios';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

function TodoList({todos, setTodos}){
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
        <TodoListBlock>
            {
              todos[0] ?

              todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  done={todo.done}
                  setTodos={setTodos}
                />
              ))
              :
                null
            }
        </TodoListBlock>
    )
}

export default TodoList;