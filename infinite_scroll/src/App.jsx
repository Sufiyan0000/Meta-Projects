import { useState } from "react";
import "./App.css";
import InfiniteScroller from "./components/InfiniteScroller";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
