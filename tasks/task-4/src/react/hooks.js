import {useEffect, useRef, useState} from "react";

const useAxisHook = (config, fpsAnimation) => {
  const prevFrame = useRef(0);
  const requestRef = useRef(null);
  const [isPlayed, setIsPlayed] = useState(false);
  const [axis, setAxis] = useState({x:0, y:0});

  useEffect(() => clearInterval(requestRef.current), []);

  const animate = () => {
    if(Date.now() - prevFrame.current > fpsAnimation) {
      prevFrame.current = Date.now();
      setAxis(prev => {
        return {
          x: prev.x < config.X ? prev.x+1 : 0,
          y: prev.x < config.X
            ? prev.y < config.Y ? prev.y + 1 : 0
            : prev.y
        };
      });
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  const handlePauseResume = () => {
    setIsPlayed(!requestRef.current);
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = null;
      return;
    }

    animate();
  };

  return {
    axis,
    isPlayed,
    handlePauseResume,
  };
};

export default useAxisHook;