import "./index.css";
import Createtodo from "./components/Createtodo";
import Todos from "./components/Todos";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  fetch("http://localhost:3000/todos").then(async (res) => {
    const json = await res.json();
    setTodos(json.todos);
  });
  return (
    <div>
      <Createtodo />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
