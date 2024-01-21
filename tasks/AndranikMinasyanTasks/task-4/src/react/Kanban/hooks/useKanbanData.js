import React, {useCallback, useState} from "react";
import {GET_DATA} from "../helper.js";

const useKanbanData = () => {
  const [data, setData] = useState(GET_DATA());

  const handleChange = useCallback((stage, newStage, itemId) => {
    setData(prev => {
      const item = prev[stage].find(({id}) => id === itemId);

      return {
        ...prev,
        [stage]: prev[stage].filter(({id}) => id !== itemId),
        [newStage]: [{...item, stage: newStage}, ...prev[newStage]]
      };
    });
  }, []);

  return [data, handleChange];
};

export default useKanbanData;