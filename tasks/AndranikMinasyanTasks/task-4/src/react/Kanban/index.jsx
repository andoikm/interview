import React, {useMemo, useState} from "react";
import CardList from "./CardList.jsx";
import Filter from "./Filter.jsx";
import useKanbanData from "./hooks/useKanbanData.js";

const Kanban = () => {
  const [data, handleChange] = useKanbanData();
  const [filterData, setFilterData] = useState("");

  const list = useMemo(() => {
    const dataKeys = Object.keys(data);
    const isLast = dataKeys.length - 1;

    return dataKeys.map((item, i) => (
        <CardList
          key={item}
          disableLeft={i === 0}
          disableRight={i === isLast}
          onChange={handleChange}
          list={data[item].filter(({ name }) => name.indexOf(filterData) !== -1)}
        />
      ));
  }, [data, filterData]);

  return (
    <div className="container-fluid">
      <Filter value={filterData} setValue={setFilterData} />
      <div className="container kanban-container">
        {list}
      </div>
    </div>
  );
};

export default Kanban;