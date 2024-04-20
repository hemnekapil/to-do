const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "complted" : "not complted"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
