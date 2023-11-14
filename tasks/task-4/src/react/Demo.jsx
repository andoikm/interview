import React, {useEffect, useRef, useState} from 'react'
import { createRoot } from 'react-dom/client';

import spriteSrc from "../resources/sprite.png";


const constants = {
  TIMER: 50
};

function Demo() {
  const timer = useRef();
  const imgRef = useRef(null);
  const sizes = useRef({height:0, width:0, sizeX:0, sizeY:0});
  const [pos, setPos] = useState({x:0, y:0});

  useEffect(() => clearInterval(timer.current), []);

  const handleImageLoaded = () => {
    const {clientHeight, clientWidth, offsetParent} = imgRef.current;
    const {clientHeight: containerHeight, clientWidth: containerWidth} = offsetParent;
    sizes.current.width = containerWidth;
    sizes.current.height = containerHeight;
    sizes.current.sizeX = clientWidth / containerWidth;
    sizes.current.sizeY = clientHeight / containerHeight;
  };

  const onClick = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      return;
    }
    const {sizeY, sizeX} = sizes.current;
    timer.current = setInterval(() => {
      setPos(prev => {
        return {
          x: prev.x < sizeX ? prev.x+1 : 0,
          y: prev.x < sizeX
             ? prev.y < sizeY ? prev.y + 1 : 0
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
          ref={imgRef}
          style={{left: `${-pos.x*sizes.current.width}px`, top: `${-pos.y*sizes.current.height}px`}}
          onLoad={handleImageLoaded}
        />
      </div>

      <button onClick={onClick}>{timer.current ? "pause" : "resume"}</button>
    </div>
  )
}



export default function bootstrap(domElement) {
  const root = createRoot(domElement)
  root.render(<Demo/>)
}
