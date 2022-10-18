import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
    background-color: var(--color-point-bg);
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    @media screen and (min-width: 790px) {
    width: 190px;
    }
    h1{
        margin: 0;
        font-size: 28px;
        color: #ffffff;
    }
    .day{
        margin-top: 10px;
        color: #ffffff;
        font-size: 18px;
    }
    .tasks-left{
        color: var(--color-hover-green);
        font-size: 16px;
        margin-top: 40px;
        font-weight: bold;
    }
`

function TodoHead({todos, setTodos}){
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    
    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className='day'>{dayName}</div>
            <div className='tasks-left'>you have {
                todos[0] ? 
                todos.filter(todo => !todo.done).length: 0} things to do</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;