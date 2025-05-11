import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState(["Take a shower", "Eat Breakfast"]);
  const [newTask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function addTask() {

    if(newTask.trim() !== ''){
        setTasks(t => [...t,newTask] )
        setNewTask('')
    }
    
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((el,i) => i !== index);
    setTasks(updatedTask)
  }

  return (
    <>
      <div className="w-full h-[80vh] bg-neutral-50 flex flex-col gap-2 items-center-safe justify-center">
        <h1 className="text-5xl ">TodoList</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={handleInput}
            className="bg-white px-4 py-2"
          />
          <div>
            <button onClick={addTask}
            className="px-4 py-2 bg-green-400 text-white rounded-md"
            >Add</button>
          </div>
        </div>
        <div>
          <ol>
            {tasks.map((el, index) => (
              <div className="flex gap-3">
                <li key={index}
                 className="w-60 bg-white m-1 px-5 text-xl "
                >{el}</li>
                <button onClick={() => deleteTask(index)}
                className="px-4 py-1 bg-red-400 text-white rounded-md"
                >Delete</button>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
