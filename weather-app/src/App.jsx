import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-400 min-h-screen flex items-center justify-center ">
      <div className="flex pt-15 flex-col gap-10  p-5 bg-neutral-100/20 rounded-lg shadow-[0_0_4px_rgba(255,255,255,0.2)] w-min-[60vw] h-[60vh] md:w-[45vw]">
        <h1 className="text-center text-3xl font-bold font-mono text-neutral-900
 flex items-center justify-center gap-3">
        <div className="w-5 h-5 bg-red-900 rounded-full"></div>
          Live Weather App
        </h1>
        
        <Weather />
      </div>
    </div>
  );
}

export default App;
