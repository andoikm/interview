import React from "react";
import Card from "./Card.jsx";

const CardList = ({ list, isFirst, isLast, onChange }) => {

  return (
    <div className="flex-item">
      {list.map(item => (
        <Card
          data={item}
          key={item.id}
          isLast={isLast}
          isFirst={isFirst}
          onChange={onChange}
        />
      ))}
    </div>
  )
};

export default CardList;