import { Link } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { useTodo } from "../SharedContexts/Todo";

const CompletedPage = () => {
  const { todos, toggleState } = useTodo();

  const completedTodos = todos.filter(todo => todo.completed);

  return <>
    <AddTodo />
    {completedTodos.length > 0 ?
      <TodoList todos={completedTodos} toggleState={toggleState} />
      : <span> 0 tasks completed </span>}
    <br />
    <Link to="/"> Pending </Link>
    <br />
    <Link to="/all">All</Link>
  </>
}

export default CompletedPage;
