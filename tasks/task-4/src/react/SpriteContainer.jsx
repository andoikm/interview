import React from "react";
import Sprite from "./Sprite.jsx";
import Button from "./Button.jsx";
import spriteSrc from "../resources/sprite.png";
import {CONFIGS, FPS} from "./constants.js";
import useAxisHook from "./hooks.js";

const SpriteContainer = () => {
  const {axis, handlePauseResume, isPlayed} = useAxisHook(CONFIGS, FPS);

  return (
    <>
      <Sprite
        src={spriteSrc}
        x={`${-axis.x * CONFIGS.width}px`}
        y={`${-axis.y * CONFIGS.height}px`}
      />
      <div className="btn-container">
        <Button onClick={handlePauseResume}>
          {isPlayed ? "pause" : "resume"}
        </Button>
      </div>
    </>
  );
};

export default SpriteContainer;