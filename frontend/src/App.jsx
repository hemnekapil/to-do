import "./index.css";
import Createtodo from "./components/Createtodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <Createtodo />
      <Todos />
    </div>
  );
};

export default App;
