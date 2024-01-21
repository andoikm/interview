import React, {useMemo} from "react";
import Card from "./Card.jsx";

const CardList = ({ list, disableLeft, disableRight, onChange }) => {
  return (
    <div className="flex-item">
      {list.map(item => (
        <Card
          data={item}
          key={item.id}
          onChange={onChange}
          disableLeft={disableLeft}
          disableRight={disableRight}
        />
      ))}
    </div>
  )
};

export default CardList;