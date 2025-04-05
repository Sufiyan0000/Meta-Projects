import { useEffect, useState } from "react";
import data from "./data";

export default function Practise(){
    const [selected,setSelected] = useState(null)

    const handleSingleSelection = (selectedId) => {
        setSelected(selectedId === selected ? null : selected)

        useEffect((
            console.log(selected)
        ),[selected])
    }

    return (
        <div className="wrapper">
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => {
                        <div className="title" onClick={handleSingleSelection}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {selected === dataItem.id ? (
                            <div className="content">
                                <h4>{dataItem.answer}</h4>
                            </div>
                        ) : null }
                    })
                ):
                <p>No Data!</p>}
            </div>
        </div>
    )
}