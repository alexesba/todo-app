import { useTodo } from "../SharedContexts/Todo";

const AddTodo = () => {
  const { addTodo } = useTodo();
  return (
    <form onSubmit={addTodo}>
      <input type="text" name="todo" placeholder="Add Todo" />
      <button type="submit"> Add</button>
    </form>
  );
}

export default AddTodo;
