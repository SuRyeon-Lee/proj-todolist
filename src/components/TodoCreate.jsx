import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoNextId } from '../TodoContext';
import axios from 'axios';

const CircleButton = styled.button`
    background: var(--color-green);
    &:hover {
      background: var(--color-hover-green);
    }
    &:active {
      background: var(--color-active-green);
    }

    z-index: 5;
    cursor: pointer;
    width: 60px;
    height: 60px;
    @media screen and (min-width: 790px) {
        width: 47px;
        height: 47px;
    }
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-radius: 0 0 10px 10px;
    transform: translate(-50%, 100%);
    @media screen and (min-width: 790px) {
        left: unset;
        right: 15px;
        bottom: 15px;
        border-radius: unset;
        transform: translate(0, 0);
    }
   
    
    color: white;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;

    > svg {
        transition: 0.125s all ease-in;
    }

    ${props =>
        props.open &&
        css`
            background: var(--color-red);
            &:hover {
                background: var(--color-hover-red);
            }
            &:active {
                background: var(--color-active-red);
            }
            > svg {
                    transform: rotate(45deg);
            }
            @media screen and (min-width: 790px) {
                > svg {
                    transform: rotate(45deg);
                }
                
            }
    `}

`
const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`

const InsertForm = styled.form`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    box-shadow: 0px -8px 11px 0px rgba(0,0,0,0.15);

    @media screen and (min-width: 790px) {
        padding-left: 15px;
        padding-top: 15px;
        padding-right: 32px;
        padding-bottom: 15px;
    }

    border-top: 1px solid #e9ecef;
`

const Input = styled.input`
    padding: 12px;
    border: 1px solid var(--color-blur-gray);
    width: 100%;
    @media screen and (min-width: 790px) {
        width: calc(100% - 30px);
    }
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`

function TodoCreate({todos, setTodos}){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const nextId = useTodoNextId();
  
    const onToggle = () => setOpen(!open);
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); // 새로고침 방지
        async function postData() {
            await axios.post(
              `http://localhost:3001/todos`,{
                    "id": nextId.current,
                    "text": value,
                    "done": false
              }
            );
          }
          async function getData() {
            const response = await axios.get(`http://localhost:3001/todos`);
            return response
          }
          postData()
            .then(() => {
              getData()
                .then((res)=>{
                  setTodos(res.data);
                })
              nextId.current++
            })
      };

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input 
                            autoFocus 
                            placeholder="type &amp; press 'Enter' ✨"
                            onChange={onChange}
                            value={value}
                            />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    )

}

export default React.memo(TodoCreate);