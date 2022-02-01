const Todos = (props) => {
  const todosList = props.list.map((todo, i) => {
    <li key={i}>
      {" "}
      <h3>{todo.title}</h3>
      <i onClick={() => props.removeItem(todo.id)}>remove</i>
    </li>;
    console.log(todosList);
  });
  return <ul>{todosList} </ul>;
};

export default Todos;
