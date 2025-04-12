import { useEffect,useState } from "react";
import './style.css' 
export default function ScrollerPosition() {
  const MousePosition = ({ render }) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return render({ mousePosition });
  };

  const PanelMouseLogger = () => {
    return (
      <div className="BasicTracker">
        <h3>Mouse Position : </h3>
        <MousePosition
          render={({ mousePosition }) => (
            <div className="Row">
              <span>X: {mousePosition.x}  </span>
              
              <span>Y: {mousePosition.y}</span>
            </div>
          )}
        />
      </div>
    );
  };

  const PointMouseLogger = () => {
    return (
      <MousePosition
        render={({ mousePosition }) => (
          <p>
            ({mousePosition.x}  ,  {mousePosition.y})
          </p>
        )}
      />
    );
  };

  return (
    <div>
      <div className="App">
        <header className="Header">Mouse Position Tracker</header>
        <PanelMouseLogger />
        <PointMouseLogger />
      </div>
    </div>
  );
}
