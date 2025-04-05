import { useState,useEffect } from "react";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length){
    return Math.floor(Math.random() * length)
  }

  function createRandomHexColor() {
    let hexColor = '#'
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

    for (let i=0; i<6 ;i++){
        hexColor += hex[randomColorUtility(hex.length)]
    }
     setColor(hexColor)
  }

  function createRandomRgbColor() {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(() =>{
    if(typeOfColor === 'hex') createRandomHexColor()
     else createRandomRgbColor()
  }
    ,[typeOfColor])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Hex</button>
      <button onClick={() => setTypeOfColor("rgb")}>RGB</button>
      <button
        onClick={
          typeOfColor === "hex" ? createRandomHexColor : createRandomRgbColor
        }
      >
        Create Random Color
      </button>

      <div style={{
        color : '#fff',
        marginTop : '40px'
      }}>
        <h1>{typeOfColor === 'hex' ? 'HEX Color ' : 'RGB Color'}</h1>
        <h2>{color}</h2>
      </div>
    </div>
  );
}
