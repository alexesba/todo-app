const Todo = ({todo:  { description, id, completed}, onClick, showStatus}) => (
  <div onClick={() => onClick(id) }>
    <span> {description} </span>
   { showStatus && <span> {`Completed: ${completed}`} </span> }
  </div>
);

export default Todo;
