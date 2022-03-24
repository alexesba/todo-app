import { Link } from "react-router-dom";
import Todo from "../components/Todo";
import { useTodo } from "../SharedContexts/Todo";
import AddTodo from "../components/AddTodo";

const PendingPage = () => {
  const { todos, toggleState } = useTodo();
  return (
    <>
      <AddTodo />
      {todos.filter(todo => !todo.completed).map(
        todo => <Todo todo={todo} onClick={toggleState} />
      )}
      <Link to="/completed"> Completed </Link>
      <br />
      <Link to="/all"> All </Link>
    </>
  );
}

export default PendingPage;
