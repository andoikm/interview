import React, {useCallback, useState} from "react";
import {GET_DATA} from "./helper.js";
import CardList from "./CardList.jsx";

const Kanban = () => {
  const [data, setData] = useState(GET_DATA());

  const handleChange = useCallback((stage, newStage, itemId) => {
    setData(prev => {
      const item = prev[stage].find(({id}) => id === itemId);
      return {
        ...prev,
        [stage]: prev[stage].filter(({id}) => id !== itemId),
        [newStage]: [...prev[newStage], item]
      };
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <div>Filter</div>
        <input/>
      </div>
      <div className="container kanban-container">
        {Object.keys(data).map((item, i) => (
          <CardList
            key={item}
            list={data[item]}
            isFirst={i === 0}
            isLast={i === Object.keys(data).length-1}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Kanban;