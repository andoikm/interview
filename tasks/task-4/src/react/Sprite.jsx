import React from "react";

const Sprite = ({x, y, src}) => {
  return (
    <div className="square">
      <img
        alt="sprite"
        src={src}
        className="animated-img"
        style={{transform: `translateX(${x}) translateY(${y})`}}
      />
    </div>
  );
};

export default Sprite;