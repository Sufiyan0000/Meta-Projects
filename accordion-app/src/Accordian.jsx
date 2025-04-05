import { useState } from "react";
import data from "./data";
import "./Accordian.css";

function Accordian() {
  const [selected, setSelected] = useState(null);

  let handleSingleSelection = (getCurrId) => {
    setSelected(getCurrId === selected ? null : getCurrId);
    console.log("Currt Id : ", getCurrId);
  };
  console.log("Selected Id : ", selected);

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span className="material-symbols-outlined">
                  arrow_downward
                </span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default Accordian;
