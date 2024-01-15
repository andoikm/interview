import React, {useEffect, useRef, useState} from 'react'
import { createRoot } from 'react-dom/client';

import spriteSrc from "../resources/sprite.png";
import Button from "./Button.jsx";
import {CONFIGS, TIMER} from "./constants.js";

function Demo() {
  const timer = useRef();
  const [pos, setPos] = useState({x:0, y:0});

  useEffect(() => clearInterval(timer.current), []);

  const onClick = () => {
    if (timer.current) {
      cancelAnimationFrame(timer.current);
      timer.current = null;
      return;
    }

    let x = Date.now();
    animate();

    function animate() {
      if(Date.now() - x > TIMER) {
        x = Date.now();
        setPos(prev => {
          return {
            x: prev.x < CONFIGS.X ? prev.x+1 : 0,
            y: prev.x < CONFIGS.X
              ? prev.y < CONFIGS.Y ? prev.y + 1 : 0
              : prev.y
          };
        });
      }
      timer.current = requestAnimationFrame(animate);
    }
  };

  return (
    <div className="demo">
      <h1>TODO: Render player here</h1>Using browser APIs and CSS create a player for playing a 24 fps animation sprite.
      <div className="square">
        <img
          alt="sprite"
          src={spriteSrc}
          className="animated-img"
          style={{transform: `translateX(${-pos.x * CONFIGS.width}px) translateY(${-pos.y * CONFIGS.height}px)`}}
        />
      </div>
      <div className="btn-container">
        <Button onClick={onClick}>
          {timer.current ? "pause" : "resume"}
        </Button>
      </div>
    </div>
  );
}

export default function bootstrap(domElement) {
  const root = createRoot(domElement)
  root.render(<Demo/>)
}
