import React, { createContext, useContext, useRef} from 'react';

const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const nextId = useRef(5);

  return (
    <TodoNextIdContext.Provider value={nextId}>
      {children}
    </TodoNextIdContext.Provider>
  );
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}