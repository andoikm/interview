import React, {useEffect, useRef, useState} from 'react'
import { createRoot } from 'react-dom/client';

import spriteSrc from "../resources/sprite.png";

const constants = {
  TIMER: 1000/24,
  X: 12,
  Y: 26-11,
  width: 640,
  height: 360,
};

function Demo() {
  const timer = useRef();
  const [pos, setPos] = useState({x:0, y:0});

  useEffect(() => clearInterval(timer.current), []);

  const onClick = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      return;
    }

    timer.current = setInterval(() => {
      setPos(prev => {
        return {
          x: prev.x < constants.X ? prev.x+1 : 0,
          y: prev.x < constants.X
             ? prev.y < constants.Y ? prev.y + 1 : 0
             : prev.y
        };
      });
    }, constants.TIMER);
  };

  return (
    <div className="demo">
      <h1>TODO: Render player here</h1>Using browser APIs and CSS create a player for playing a 24 fps animation sprite.
      <div className="square">
        <img
          className="animated-img"
          src={spriteSrc}
          alt="sprite"
          style={{left: `${-pos.x*constants.width}px`, top: `${-pos.y*constants.height}px`}}
        />
      </div>
      <div style={{textAlign: "center"}}>
        <button
          style={{margin: "20px", padding: "5px 10px"}}
          onClick={onClick}
        >{timer.current ? "pause" : "resume"}</button>
      </div>
    </div>
  );
}

export default function bootstrap(domElement) {
  const root = createRoot(domElement)
  root.render(<Demo/>)
}
