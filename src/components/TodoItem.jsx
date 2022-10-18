import React, { useState, useRef  } from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete, MdEdit, MdCancel, MdSave} from 'react-icons/md';
import axios from 'axios';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-blur-gray);
    font-size: 20px;
    cursor: pointer;
    &:hover {
        color: var(--color-red);
    }
    display: none;
`

const Edit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    color: var(--color-blur-gray);
    font-size: 20px;
    cursor: pointer;
    &:hover {
        color: var(--color-yellow);
    }
    display: none;
`

const Save = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-bottom: 2px;
    color: var(--color-blur-gray);
    font-size: 20px;
    cursor: pointer;
    &:hover {
        color: var(--color-green);
    }
`

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
      ${Edit} {
        display: initial;
      }
      ${Remove} {
        display: initial;
      }
    }
`

const CheckCircle = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
      props.done &&
      css`
        border: none;
        background-color: var(--color-green);;
        color: #fff;
      `}
`

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props =>
      props.done &&
      css`
        color: #ced4da;
        text-decoration: line-through;
      `
    }
    ${props =>
      props.edit ?
        css`
          display: none;
        `:
        css`
          display: block;
        `
    }
`

const Input = styled.input`
  flex: 1;
  font-size: 21px;
  color: #495057;
  border: none;
  border-radius: none;
  border-bottom: 1px solid var(--color-blur-gray);
  &:focus {outline: none;};
  ${props =>
      props.edit ?
        css`
          display: block;
        `:
        css`
          display: none;
        `
      }
`

function TodoItem({ id,done,text,setTodos }){
    const [isEdit,setIsEdit] = useState(false)
    const [newToDo,setNewToDo] = useState(text)
    
    const editInput = useRef();

    const onToggle = () => {
      async function patchData() {
        const response = await axios.patch(
          `http://localhost:3001/todos/${id}`,{
            "done" : !done
          }
        );
        return response
      }
      async function getData() {
        const response = await axios.get(`http://localhost:3001/todos`);
        return response
      }
      patchData()
        .then((response) => {
          getData()
            .then((res)=>{
              setTodos(res.data);
            })
        })
    }

    const onRemove = () => {
      async function deleteData() {
        const response = await axios.delete(`http://localhost:3001/todos/${id}`);
        return response
      }
      async function getData() {
        const response = await axios.get(`http://localhost:3001/todos`);
        return response
      }
      deleteData()
      .then((response) => {
        getData()
          .then((res)=>{
            setTodos(res.data);
          })
      })
    }

    const onEdit = (e) => {
      setIsEdit(!isEdit)
      if(isEdit){
        editInput.current.focus()
      }
    };

    const onSave = () => {
      async function patchData() {
        const response = await axios.patch(
          `http://localhost:3001/todos/${id}`,{
            "text" : newToDo
          }
        );
        return response
      }
      async function getData() {
        const response = await axios.get(`http://localhost:3001/todos`);
        return response
      }
      patchData()
        .then((response) => {
          getData()
            .then((res)=>{
              setTodos(res.data);
            })
        })
        
      setIsEdit(!isEdit)
    }

    return (
        <TodoItemBlock>
            <CheckCircle done = {done} onClick={onToggle}> {done && <MdDone/>} </CheckCircle>
            <Text done={done} edit={isEdit}>{text}</Text>
            <Input type={text} edit={isEdit} 
              ref={editInput} value={newToDo} onChange={(e)=>{setNewToDo(e.target.value)}}></Input>
            <Edit onClick={onEdit}>
              {isEdit ?
                <MdCancel/>
                : 
                <MdEdit/>
              }
            </Edit>
            <Remove onClick={onRemove}>
                <MdDelete/>
            </Remove>
            {isEdit ?
                <Save onClick={onSave}>
                  <MdSave/>
                </Save>
                : 
                null
              }
        </TodoItemBlock>
    )
}

//memo로 감싸서 내보내기 다른 항목이 업데이트 될 때, 
//불필요한 리렌더링을 방지하게 되어 성능을 최적화 할 수 있게 됩니다.
export default React.memo(TodoItem);