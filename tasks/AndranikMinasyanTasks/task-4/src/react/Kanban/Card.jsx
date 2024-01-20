import React from "react"

const Card = ({ data, isFirst, isLast, onChange }) => {

  const handleMoveLeft = () => {
    onChange(data.stage, data.stage - 1, data.id);
  };

  const handleMoveRight = () => {
    onChange(data.stage, data.stage + 1, data.id);
  };

  return (
    <div className="kanban-card">
      <h1>{data.name}</h1>
      <p className="description">{data.description}</p>
      <div className="button-wrapper">
        {!isFirst && <button onClick={handleMoveLeft}>left</button>}
        {!isLast && <button onClick={handleMoveRight}>right</button>}
      </div>
    </div>
  );
};

export default Card;