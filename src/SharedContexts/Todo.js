import { createContext, useContext, useState } from "react";

const TodoContext = createContext(null);

export const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState([
    { description: "Leer Sobre Redux", id: 1, completed: false },
    { description: "Leer Sobre React Hooks", id: 2, completed: false }
  ]);

  const toggleState = (id) => {
    const updatedList = todos.map(todo => ({
      ...todo,
      completed: todo.id === id ? !todo.completed : todo.completed
    })
    );
    setTodos(updatedList);
  }

  const addTodo = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const description = formData.get("todo");
    const completed = false;
    const id = new Date().getTime();
    description && setTodos([
      ...todos,
      {
        description,
        completed,
        id
      }
    ])
    event.currentTarget.reset();
  };


  const value = { todos, addTodo, toggleState };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export const useTodo = () => useContext(TodoContext)
