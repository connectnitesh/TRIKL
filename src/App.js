import { useState } from "react";
import "./App.css";

function App() {
  const [drag, setDrag] = useState(false); 
  const [width, setWidth] = useState("280");
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerDown = () => {
    setDrag(true);
  };

  const handlePointerUp = () => {
    setDrag(false);
  };

  const handlePointerMove = (e) => {
    if (drag) {
      setTranslate({
        x: translate.x + e.movementX,
        y: translate.y + e.movementY,
      });
    }
  };

  const handleChange = (e) => {
    const len = e.target.value.length;
    setWidth(len * 20);
  };

  return (
    <div className="container" onMouseUp={handlePointerUp}>
      <img src="https://source.unsplash.com/random/900×600/?Nature" alt="" draggable="false"/>
      <div
        className="wrapper"
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerUp}
        onMouseMove={handlePointerMove}
      >
        <input
          style={{
            transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
            width: `${width}px`,
          }}
          placeholder="Task Completed"
          name=""
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
