import Todo from "../components/Todo";

const TodoList = ({ todos, toggleState, showStatus }) => {
  return (
    <>
      {
        todos.map(
          todo => <Todo
            todo={todo}
            onClick={toggleState}
            key={todo.id}
            showStatus={showStatus}
          />
        )
      }
    </>
  )
};

export default TodoList;
