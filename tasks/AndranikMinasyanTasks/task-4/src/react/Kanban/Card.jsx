import React from "react"

const Card = ({ data, disableLeft, disableRight, onChange }) => {

  const handleMove = (delta) => {
    onChange(data.stage, data.stage + delta, data.id);
  };

  return (
    <div className="kanban-card">
      <h1>{data.name}</h1>
      <p className="description">{data.description}</p>
      <div className="button-wrapper">
        {!disableLeft && <button onClick={() => handleMove(-1)}>left</button>}
        {!disableRight && <button onClick={() => handleMove(1)}>right</button>}
      </div>
    </div>
  );
};

export default Card;