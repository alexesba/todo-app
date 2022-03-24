import { Link } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import { useTodo } from "../SharedContexts/Todo";
import TodoList from "../components/TodoList";

const AllPage = () => {
  const { todos, toggleState } = useTodo();

  return (
    <>
      <AddTodo />
      <TodoList
        todos={todos} toggleState={toggleState}
        showStatus
      />
      <br />
      <Link to="/completed">Completed</Link>
      <br />
      <Link to="/pending">Pending</Link>
    </>
  )
};

export default AllPage;
